import type { MenuModelItemProps } from '@admiral-ds/react-ui';

export type RenderDirection = 'left' | 'right';
export type SubMenuAlign = 'left' | 'leftBottom' | 'right' | 'rightBottom';
export type SubMenuPosition = {
  position: SubMenuAlign;
  bottomOffset?: number;
};

/**
 * функция вычисления позиции SubMenu
 *
 * @param anchorElement - элемент, относительно которого позиционируется SubMenu
 * @param containerElement - контейнер, в котором отрисовывается SubMenu
 * @param renderDirection - сторона от родительского меню, в которой по умолчанию
 * будет появляться дочернее меню при наличии места
 * @return SubMenuPosition - объект, содержащий данные о позиции subMenu и отступ снизу
 * */
export function getPosition(
  anchorElement: HTMLElement,
  containerElement: HTMLElement,
  renderDirection: RenderDirection,
): SubMenuPosition {
  const anchorElementRect: DOMRect = anchorElement.getBoundingClientRect();
  const containerRect: DOMRect = containerElement.getBoundingClientRect();

  const isEnoughOnRight = document.documentElement.clientWidth - anchorElementRect.right > containerRect.width;
  const isEnoughOnLeft = anchorElementRect.left > containerRect.width;

  const side =
    renderDirection === 'right'
      ? !isEnoughOnRight && isEnoughOnLeft
        ? 'left'
        : 'right'
      : !isEnoughOnLeft && isEnoughOnRight
        ? 'right'
        : 'left';

  const isEnoughOnBottom = document.documentElement.clientHeight - anchorElementRect.top > containerRect.height - 1;

  if (isEnoughOnBottom) return { position: `${side}Bottom` };
  else {
    const offset = -(document.documentElement.clientHeight - anchorElementRect.top - containerRect.height) + 8;
    return { position: side, bottomOffset: offset };
  }
}

export const findModelItem = (items: Array<MenuModelItemProps>, id: string): MenuModelItemProps | undefined => {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    if (item.id === id) return item;
    if (item.subItems && item.subItems.length > 0) {
      const subItem = findModelItem(item.subItems, id);
      if (subItem) return subItem;
    }
  }
};

export const hasSelectedChildren = (item: MenuModelItemProps, selected: Array<string>): boolean => {
  return item.subItems
    ? item.subItems.some((item) => selected.includes(item.id) || hasSelectedChildren(item, selected))
    : false;
};

export const valueToArray = (value: string | string[]) => {
  return Array.isArray(value) ? [...value] : [value];
};

/**
 * Point type for safety triangle calculations
 */
type Point = {
  x: number;
  y: number;
};

/**
 * Checks if a point is inside a polygon using the ray casting algorithm
 * @param point - The point to check
 * @param polygon - Array of points forming the polygon
 * @returns true if the point is inside the polygon
 */
function isPointInPolygon(point: Point, polygon: Point[]): boolean {
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
}

/**
 * Creates a safety triangle between a reference point and submenu to prevent accidental submenu closure
 * when moving the mouse diagonally toward the submenu.
 *
 * @param cursorX - Current mouse X position
 * @param cursorY - Current mouse Y position
 * @param referenceX - Reference X position (where hover started)
 * @param referenceY - Reference Y position (where hover started)
 * @param menuItemRect - DOMRect of the menu item
 * @param submenuRect - DOMRect of the submenu (if visible)
 * @param submenuOnLeft - Whether the submenu appears on the left side
 * @returns true if the cursor is within the safety triangle
 */
export function isInSafetyTriangle(
  cursorX: number,
  cursorY: number,
  referenceX: number,
  referenceY: number,
  menuItemRect: DOMRect,
  submenuRect: DOMRect | null,
  submenuOnLeft: boolean,
): boolean {
  if (!submenuRect) return false;

  // Create a triangle from the reference position (where hover started) to the submenu corners
  // This creates a "safe zone" that the user can move through to get to the submenu
  const triangle: Point[] = [
    { x: referenceX, y: referenceY },
    // Top corner of submenu closest to menu
    {
      x: submenuOnLeft ? submenuRect.right : submenuRect.left,
      y: submenuRect.top,
    },
    // Bottom corner of submenu closest to menu
    {
      x: submenuOnLeft ? submenuRect.right : submenuRect.left,
      y: submenuRect.bottom,
    },
  ];

  return isPointInPolygon({ x: cursorX, y: cursorY }, triangle);
}
