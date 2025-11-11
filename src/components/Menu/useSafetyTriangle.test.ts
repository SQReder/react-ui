import { renderHook, act } from '@testing-library/react';
import { useSafetyTriangle } from './useSafetyTriangle';

// Helper function to create a mock element with getBoundingClientRect
const createMockElement = (rect: DOMRect) => {
  const element = document.createElement('div');
  jest.spyOn(element, 'getBoundingClientRect').mockReturnValue(rect);
  return element;
};

describe('useSafetyTriangle', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  describe('initialization', () => {
    it('should initialize with default config', () => {
      const { result } = renderHook(() => useSafetyTriangle());

      expect(result.current).toHaveProperty('handleMouseLeave');
      expect(result.current).toHaveProperty('updateMousePosition');
      expect(result.current).toHaveProperty('setSubmenuElement');
      expect(result.current).toHaveProperty('setTriggerElement');
      expect(result.current).toHaveProperty('cancelClose');
      expect(result.current).toHaveProperty('cleanup');
      expect(result.current).toHaveProperty('isInSafetyZone');
    });

    it('should accept custom buffer and closeDelay', () => {
      const { result } = renderHook(() =>
        useSafetyTriangle({
          buffer: 10,
          closeDelay: 500,
        }),
      );

      expect(result.current).toBeDefined();
    });
  });

  describe('mouse position tracking', () => {
    it('should update mouse position', () => {
      const { result } = renderHook(() => useSafetyTriangle());

      const mouseEvent = new MouseEvent('mousemove', {
        clientX: 100,
        clientY: 200,
      });

      act(() => {
        result.current.updateMousePosition(mouseEvent);
      });

      // Mouse position is updated internally, verify via isInSafetyZone behavior
      expect(result.current.isInSafetyZone({ x: 100, y: 200 })).toBe(false);
    });

    it('should handle React MouseEvent', () => {
      const { result } = renderHook(() => useSafetyTriangle());

      const reactMouseEvent = {
        clientX: 150,
        clientY: 250,
      } as React.MouseEvent;

      act(() => {
        result.current.updateMousePosition(reactMouseEvent);
      });

      expect(result.current.isInSafetyZone({ x: 150, y: 250 })).toBe(false);
    });
  });

  describe('element references', () => {
    it('should set trigger element', () => {
      const { result } = renderHook(() => useSafetyTriangle());

      const element = createMockElement({
        left: 0,
        top: 0,
        right: 100,
        bottom: 50,
        width: 100,
        height: 50,
        x: 0,
        y: 0,
        toJSON: jest.fn(),
      });

      act(() => {
        result.current.setTriggerElement(element);
      });

      // Verify element is set by checking safety zone behavior
      expect(element.getBoundingClientRect).toHaveBeenCalled();
    });

    it('should set submenu element', () => {
      const { result } = renderHook(() => useSafetyTriangle());

      const element = createMockElement({
        left: 100,
        top: 0,
        right: 200,
        bottom: 100,
        width: 100,
        height: 100,
        x: 100,
        y: 0,
        toJSON: jest.fn(),
      });

      act(() => {
        result.current.setSubmenuElement(element);
      });

      expect(element.getBoundingClientRect).toHaveBeenCalled();
    });

    it('should clear element references when set to null', () => {
      const { result } = renderHook(() => useSafetyTriangle());

      const element = createMockElement({
        left: 0,
        top: 0,
        right: 100,
        bottom: 50,
        width: 100,
        height: 50,
        x: 0,
        y: 0,
        toJSON: jest.fn(),
      });

      act(() => {
        result.current.setTriggerElement(element);
        result.current.setTriggerElement(null);
      });

      // After clearing, safety zone should return false
      expect(result.current.isInSafetyZone({ x: 50, y: 25 })).toBe(false);
    });
  });

  describe('safety zone detection', () => {
    it('should detect mouse in trigger element', () => {
      const { result } = renderHook(() => useSafetyTriangle({ buffer: 0 }));

      const trigger = createMockElement({
        left: 0,
        top: 0,
        right: 100,
        bottom: 50,
        width: 100,
        height: 50,
        x: 0,
        y: 0,
        toJSON: jest.fn(),
      });

      const submenu = createMockElement({
        left: 100,
        top: 0,
        right: 200,
        bottom: 100,
        width: 100,
        height: 100,
        x: 100,
        y: 0,
        toJSON: jest.fn(),
      });

      act(() => {
        result.current.setTriggerElement(trigger);
        result.current.setSubmenuElement(submenu);
      });

      // Point inside trigger
      expect(result.current.isInSafetyZone({ x: 50, y: 25 })).toBe(true);
    });

    it('should detect mouse in submenu element', () => {
      const { result } = renderHook(() => useSafetyTriangle({ buffer: 0 }));

      const trigger = createMockElement({
        left: 0,
        top: 0,
        right: 100,
        bottom: 50,
        width: 100,
        height: 50,
        x: 0,
        y: 0,
        toJSON: jest.fn(),
      });

      const submenu = createMockElement({
        left: 100,
        top: 0,
        right: 200,
        bottom: 100,
        width: 100,
        height: 100,
        x: 100,
        y: 0,
        toJSON: jest.fn(),
      });

      act(() => {
        result.current.setTriggerElement(trigger);
        result.current.setSubmenuElement(submenu);
      });

      // Point inside submenu
      expect(result.current.isInSafetyZone({ x: 150, y: 50 })).toBe(true);
    });

    it('should return false when no elements are set', () => {
      const { result } = renderHook(() => useSafetyTriangle());

      expect(result.current.isInSafetyZone({ x: 100, y: 100 })).toBe(false);
    });

    it('should respect buffer zone', () => {
      const { result } = renderHook(() => useSafetyTriangle({ buffer: 10 }));

      const trigger = createMockElement({
        left: 0,
        top: 0,
        right: 100,
        bottom: 50,
        width: 100,
        height: 50,
        x: 0,
        y: 0,
        toJSON: jest.fn(),
      });

      const submenu = createMockElement({
        left: 100,
        top: 0,
        right: 200,
        bottom: 100,
        width: 100,
        height: 100,
        x: 100,
        y: 0,
        toJSON: jest.fn(),
      });

      act(() => {
        result.current.setTriggerElement(trigger);
        result.current.setSubmenuElement(submenu);
      });

      // Point just outside submenu but within buffer
      expect(result.current.isInSafetyZone({ x: 205, y: 50 })).toBe(true);

      // Point outside buffer
      expect(result.current.isInSafetyZone({ x: 220, y: 50 })).toBe(false);
    });
  });

  describe('handleMouseLeave', () => {
    it('should close immediately when outside safety zone', () => {
      const { result } = renderHook(() => useSafetyTriangle());
      const onClose = jest.fn();

      const mouseEvent = {
        clientX: 500,
        clientY: 500,
      } as React.MouseEvent;

      act(() => {
        result.current.updateMousePosition(mouseEvent);
      });

      let shouldClose: boolean = false;
      act(() => {
        shouldClose = result.current.handleMouseLeave(mouseEvent, onClose);
      });

      expect(shouldClose).toBe(true);
      expect(onClose).not.toHaveBeenCalled();
    });

    it('should delay close when inside safety zone', () => {
      const { result } = renderHook(() => useSafetyTriangle({ closeDelay: 300 }));
      const onClose = jest.fn();

      const trigger = createMockElement({
        left: 0,
        top: 0,
        right: 100,
        bottom: 50,
        width: 100,
        height: 50,
        x: 0,
        y: 0,
        toJSON: jest.fn(),
      });

      const submenu = createMockElement({
        left: 100,
        top: 0,
        right: 200,
        bottom: 100,
        width: 100,
        height: 100,
        x: 100,
        y: 0,
        toJSON: jest.fn(),
      });

      act(() => {
        result.current.setTriggerElement(trigger);
        result.current.setSubmenuElement(submenu);
      });

      // Mouse position in trigger
      const mouseEvent = {
        clientX: 50,
        clientY: 25,
      } as React.MouseEvent;

      act(() => {
        result.current.updateMousePosition(mouseEvent);
      });

      let shouldClose: boolean = false;
      act(() => {
        shouldClose = result.current.handleMouseLeave(mouseEvent, onClose);
      });

      expect(shouldClose).toBe(false);
      expect(onClose).not.toHaveBeenCalled();

      // Move mouse outside safety zone
      act(() => {
        result.current.updateMousePosition({ clientX: 500, clientY: 500 } as MouseEvent);
      });

      // Fast forward past delay
      act(() => {
        jest.advanceTimersByTime(300);
      });

      expect(onClose).toHaveBeenCalled();
    });

    it('should cancel previous timeout when called again', () => {
      const { result } = renderHook(() => useSafetyTriangle({ closeDelay: 300 }));
      const onClose1 = jest.fn();
      const onClose2 = jest.fn();

      const trigger = createMockElement({
        left: 0,
        top: 0,
        right: 100,
        bottom: 50,
        width: 100,
        height: 50,
        x: 0,
        y: 0,
        toJSON: jest.fn(),
      });

      const submenu = createMockElement({
        left: 100,
        top: 0,
        right: 200,
        bottom: 100,
        width: 100,
        height: 100,
        x: 100,
        y: 0,
        toJSON: jest.fn(),
      });

      act(() => {
        result.current.setTriggerElement(trigger);
        result.current.setSubmenuElement(submenu);
      });

      const mouseEvent = {
        clientX: 50,
        clientY: 25,
      } as React.MouseEvent;

      act(() => {
        result.current.updateMousePosition(mouseEvent);
      });

      act(() => {
        result.current.handleMouseLeave(mouseEvent, onClose1);
      });

      // Call again before first timeout completes
      act(() => {
        jest.advanceTimersByTime(100);
        result.current.handleMouseLeave(mouseEvent, onClose2);
      });

      // Move mouse outside safety zone so the timeout will trigger
      act(() => {
        result.current.updateMousePosition({ clientX: 500, clientY: 500 } as MouseEvent);
      });

      // Fast forward past original delay
      act(() => {
        jest.advanceTimersByTime(300);
      });

      expect(onClose1).not.toHaveBeenCalled();
      expect(onClose2).toHaveBeenCalled();
    });
  });

  describe('cancelClose', () => {
    it('should cancel pending close timeout', () => {
      const { result } = renderHook(() => useSafetyTriangle({ closeDelay: 300 }));
      const onClose = jest.fn();

      const trigger = createMockElement({
        left: 0,
        top: 0,
        right: 100,
        bottom: 50,
        width: 100,
        height: 50,
        x: 0,
        y: 0,
        toJSON: jest.fn(),
      });

      const submenu = createMockElement({
        left: 100,
        top: 0,
        right: 200,
        bottom: 100,
        width: 100,
        height: 100,
        x: 100,
        y: 0,
        toJSON: jest.fn(),
      });

      act(() => {
        result.current.setTriggerElement(trigger);
        result.current.setSubmenuElement(submenu);
      });

      const mouseEvent = {
        clientX: 50,
        clientY: 25,
      } as React.MouseEvent;

      act(() => {
        result.current.updateMousePosition(mouseEvent);
        result.current.handleMouseLeave(mouseEvent, onClose);
      });

      act(() => {
        result.current.cancelClose();
      });

      act(() => {
        jest.advanceTimersByTime(500);
      });

      expect(onClose).not.toHaveBeenCalled();
    });
  });

  describe('cleanup', () => {
    it('should cancel timeout and clear element references', () => {
      const { result } = renderHook(() => useSafetyTriangle({ closeDelay: 300 }));
      const onClose = jest.fn();

      const trigger = createMockElement({
        left: 0,
        top: 0,
        right: 100,
        bottom: 50,
        width: 100,
        height: 50,
        x: 0,
        y: 0,
        toJSON: jest.fn(),
      });

      const submenu = createMockElement({
        left: 100,
        top: 0,
        right: 200,
        bottom: 100,
        width: 100,
        height: 100,
        x: 100,
        y: 0,
        toJSON: jest.fn(),
      });

      act(() => {
        result.current.setTriggerElement(trigger);
        result.current.setSubmenuElement(submenu);
      });

      const mouseEvent = {
        clientX: 50,
        clientY: 25,
      } as React.MouseEvent;

      act(() => {
        result.current.updateMousePosition(mouseEvent);
        result.current.handleMouseLeave(mouseEvent, onClose);
      });

      act(() => {
        result.current.cleanup();
      });

      act(() => {
        jest.advanceTimersByTime(500);
      });

      expect(onClose).not.toHaveBeenCalled();

      // After cleanup, safety zone should return false
      expect(result.current.isInSafetyZone({ x: 50, y: 25 })).toBe(false);
    });
  });

  describe('point in polygon algorithm', () => {
    it('should correctly detect points inside triangle (submenu on right)', () => {
      const { result } = renderHook(() => useSafetyTriangle({ buffer: 0 }));

      // Trigger on left, submenu on right
      const trigger = createMockElement({
        left: 0,
        top: 20,
        right: 100,
        bottom: 60,
        width: 100,
        height: 40,
        x: 0,
        y: 20,
        toJSON: jest.fn(),
      });

      const submenu = createMockElement({
        left: 100,
        top: 0,
        right: 200,
        bottom: 100,
        width: 100,
        height: 100,
        x: 100,
        y: 0,
        toJSON: jest.fn(),
      });

      act(() => {
        result.current.setTriggerElement(trigger);
        result.current.setSubmenuElement(submenu);
        result.current.updateMousePosition({ clientX: 50, clientY: 40 } as MouseEvent);
      });

      // Mouse starts in trigger
      const startPoint = { x: 50, y: 40 };
      expect(result.current.isInSafetyZone(startPoint)).toBe(true);
    });

    it('should correctly detect points inside triangle (submenu on left)', () => {
      const { result } = renderHook(() => useSafetyTriangle({ buffer: 0 }));

      // Submenu on left, trigger on right
      const trigger = createMockElement({
        left: 100,
        top: 20,
        right: 200,
        bottom: 60,
        width: 100,
        height: 40,
        x: 100,
        y: 20,
        toJSON: jest.fn(),
      });

      const submenu = createMockElement({
        left: 0,
        top: 0,
        right: 100,
        bottom: 100,
        width: 100,
        height: 100,
        x: 0,
        y: 0,
        toJSON: jest.fn(),
      });

      act(() => {
        result.current.setTriggerElement(trigger);
        result.current.setSubmenuElement(submenu);
        result.current.updateMousePosition({ clientX: 150, clientY: 40 } as MouseEvent);
      });

      // Mouse starts in trigger
      const startPoint = { x: 150, y: 40 };
      expect(result.current.isInSafetyZone(startPoint)).toBe(true);
    });
  });
});
