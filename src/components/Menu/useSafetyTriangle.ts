import { useRef, useCallback } from 'react';

interface Point {
  x: number;
  y: number;
}

interface SafetyTriangleConfig {
  /** Buffer zone in pixels around the polygon (default: 5) */
  buffer?: number;
  /** Delay in ms before closing if mouse is outside triangle (default: 300) */
  closeDelay?: number;
}

/**
 * Hook to implement safety triangle for submenu navigation.
 * Creates a triangular safe zone between a menu item and its submenu,
 * preventing the submenu from closing when the mouse moves through this area.
 */
export const useSafetyTriangle = (config: SafetyTriangleConfig = {}) => {
  const { buffer = 5, closeDelay = 300 } = config;

  const currentMousePos = useRef<Point>({ x: 0, y: 0 });
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const submenuBoundsRef = useRef<DOMRect | null>(null);
  const triggerBoundsRef = useRef<DOMRect | null>(null);

  /**
   * Checks if a point is inside a polygon using the ray casting algorithm
   */
  const isPointInPolygon = useCallback((point: Point, polygon: Point[]): boolean => {
    let inside = false;
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
      const xi = polygon[i].x;
      const yi = polygon[i].y;
      const xj = polygon[j].x;
      const yj = polygon[j].y;

      const intersect = yi > point.y !== yj > point.y && point.x < ((xj - xi) * (point.y - yi)) / (yj - yi) + xi;
      if (intersect) inside = !inside;
    }
    return inside;
  }, []);

  /**
   * Creates a triangular polygon between the trigger element and submenu
   */
  const createSafetyPolygon = useCallback(
    (mousePos: Point, triggerRect: DOMRect, submenuRect: DOMRect): Point[] => {
      // Determine if submenu is to the right or left of trigger
      const isSubmenuRight = submenuRect.left >= triggerRect.right;

      if (isSubmenuRight) {
        // Submenu is to the right - create triangle pointing right
        return [
          mousePos,
          { x: submenuRect.left - buffer, y: submenuRect.top - buffer },
          { x: submenuRect.left - buffer, y: submenuRect.bottom + buffer },
        ];
      } else {
        // Submenu is to the left - create triangle pointing left
        return [
          mousePos,
          { x: submenuRect.right + buffer, y: submenuRect.top - buffer },
          { x: submenuRect.right + buffer, y: submenuRect.bottom + buffer },
        ];
      }
    },
    [buffer],
  );

  /**
   * Checks if the current mouse position is within the safety triangle
   */
  const isInSafetyZone = useCallback(
    (mousePos: Point): boolean => {
      if (!triggerBoundsRef.current || !submenuBoundsRef.current) {
        return false;
      }

      // Check if mouse is in submenu itself
      const submenuRect = submenuBoundsRef.current;
      if (
        mousePos.x >= submenuRect.left - buffer &&
        mousePos.x <= submenuRect.right + buffer &&
        mousePos.y >= submenuRect.top - buffer &&
        mousePos.y <= submenuRect.bottom + buffer
      ) {
        return true;
      }

      // Check if mouse is in trigger element
      const triggerRect = triggerBoundsRef.current;
      if (
        mousePos.x >= triggerRect.left &&
        mousePos.x <= triggerRect.right &&
        mousePos.y >= triggerRect.top &&
        mousePos.y <= triggerRect.bottom
      ) {
        return true;
      }

      // Create safety triangle and check if mouse is inside
      const polygon = createSafetyPolygon(currentMousePos.current, triggerRect, submenuRect);
      return isPointInPolygon(mousePos, polygon);
    },
    [buffer, createSafetyPolygon, isPointInPolygon],
  );

  /**
   * Updates the tracked mouse position
   */
  const updateMousePosition = useCallback((event: MouseEvent | React.MouseEvent) => {
    currentMousePos.current = { x: event.clientX, y: event.clientY };
  }, []);

  /**
   * Sets the submenu element bounds for safety triangle calculation
   */
  const setSubmenuElement = useCallback((element: HTMLElement | null) => {
    if (element) {
      submenuBoundsRef.current = element.getBoundingClientRect();
    } else {
      submenuBoundsRef.current = null;
    }
  }, []);

  /**
   * Sets the trigger element bounds for safety triangle calculation
   */
  const setTriggerElement = useCallback((element: HTMLElement | null) => {
    if (element) {
      triggerBoundsRef.current = element.getBoundingClientRect();
    } else {
      triggerBoundsRef.current = null;
    }
  }, []);

  /**
   * Handles mouse leave with safety triangle logic
   * Returns true if submenu should close immediately, false if it should wait
   */
  const handleMouseLeave = useCallback(
    (event: React.MouseEvent, onClose: () => void): boolean => {
      updateMousePosition(event);

      // Clear any existing timeout
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
      }

      const mousePos = { x: event.clientX, y: event.clientY };

      // If mouse is in safety zone, delay closing
      if (isInSafetyZone(mousePos)) {
        // Set up delayed close
        closeTimeoutRef.current = setTimeout(() => {
          // Check again if still outside after delay
          if (!isInSafetyZone(currentMousePos.current)) {
            onClose();
          }
        }, closeDelay);
        return false;
      }

      // Not in safety zone, close immediately
      return true;
    },
    [closeDelay, isInSafetyZone, updateMousePosition],
  );

  /**
   * Cancels any pending close timeout
   */
  const cancelClose = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, []);

  /**
   * Cleans up the hook state
   */
  const cleanup = useCallback(() => {
    cancelClose();
    submenuBoundsRef.current = null;
    triggerBoundsRef.current = null;
  }, [cancelClose]);

  return {
    handleMouseLeave,
    updateMousePosition,
    setSubmenuElement,
    setTriggerElement,
    cancelClose,
    cleanup,
    isInSafetyZone,
  };
};
