import type { HTMLAttributes, ReactNode, RefObject, MouseEvent, FocusEvent } from 'react';
import { forwardRef, useEffect, useLayoutEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { ScrollContainer } from '#src/components/Scrollbar';
import { MenuItem } from '#src/components/Menu/MenuItem';
import type { MenuModelItemProps } from '#src/components/Menu/MenuItem';
import { keyboardKey } from '../common/keyboardKey';
import { VirtualBody } from '#src/components/Menu/VirtualBody';
import { refSetter } from '#src/components/common/utils/refSetter';
import type { MenuDimensions } from '#src/components/Menu/types';
import { SubMenuContainer } from '#src/components/Menu/SubMenuContainer';
import { useDropdown } from '#src/components/DropdownProvider';
import type { RenderDirection } from '#src/components/Menu/utils';
import { findModelItem, hasSelectedChildren, valueToArray } from '#src/components/Menu/utils';
import { passMenuDataAttributes } from '#src/components/common/utils/splitDataAttributes';

export const getItemHeight = (dimension?: MenuDimensions) => {
  switch (dimension) {
    case 'l':
      return 48;
    case 'm':
      return 40;
    case 's':
      return 32;
    default:
      return 48;
  }
};

const getHeight = (rowCount: number, dimension?: MenuDimensions) => {
  return getItemHeight(dimension) * rowCount + 16;
};

type MenuListHeightsProps = {
  $dimension?: MenuDimensions;
  $rowCount: number;
  $hasTopPanel: boolean;
  $hasBottomPanel: boolean;
  $maxHeight?: string | number;
};

const menuListHeights = css<MenuListHeightsProps>`
  max-height: ${({ $dimension, $rowCount }) => {
    return `min(calc(100vh - 16px), ${getHeight($rowCount, $dimension)}px)`;
  }};
`;

const Wrapper = styled.div<{
  $dimension?: MenuDimensions;
  $hasTopPanel: boolean;
  $hasBottomPanel: boolean;
}>`
  overflow: hidden;
  position: relative;

  padding: 0;
  ${(p) => (p.$hasTopPanel ? 'padding-top: 8px' : '')};
  ${(p) => (p.$hasBottomPanel ? 'padding-bottom: 8px' : '')};
  box-sizing: border-box;
  display: flex;

  flex-direction: column;
  align-items: stretch;
  pointer-events: initial;
  background-color: var(--admiral-color-Special_ElevatedBG, ${(p) => p.theme.color['Special/Elevated BG']});
  max-width: calc(100vw - 32px);
  border-color: transparent;
  &:focus-visible {
    border: 0;
    outline: none;
  }
`;

const StyledScrollContainer = styled(ScrollContainer)<MenuListHeightsProps>`
  position: relative;
  ${(p) => (!p.$hasTopPanel ? 'padding-top: 8px' : '')};
  ${(p) => (!p.$hasBottomPanel ? 'padding-bottom: 8px' : '')};
  margin: 0;
  appearance: none;
  flex: 1 1 auto;
  border: none;
  box-sizing: border-box;
  ${menuListHeights};
  ${(p) => (p.$maxHeight ? `max-height: ${p.$maxHeight}` : '')};
`;

export interface RenderPanelProps {
  /** Размер компонента */
  dimension: MenuDimensions;
  /** Позволяет добавлять миксин для панели, созданный с помощью styled css  */
  menuActionsPanelCssMixin?: ReturnType<typeof css>;
}

export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  /** Размер Меню */
  dimension?: MenuDimensions;
  /** Активная секция Menu */
  active?: string | null;
  /** Секция в состоянии preselected  */
  preselected?: string;
  /** выбранная секция Menu */
  selected?: string | Array<string>;
  /** выбранная по умолчанию секция Menu */
  defaultSelected?: string | Array<string>;
  /** Обработчик активации (hover) item в меню */
  onActivateItem?: (id?: string) => void;
  /** Обработчик выбора item в меню */
  onSelectItem?: (id: string) => void;
  /** Обработчик выбора item в меню */
  onDeselectItem?: (id: string) => void;
  /** Модель данных, с рендер-пропсами*/
  model: Array<MenuModelItemProps>;
  /** Задает максимальную высоту меню (с учетом наличия/отсутствия верхней/нижней панели) */
  maxHeight?: string | number;
  /** Позволяет добавить панель сверху над выпадающим списком */
  renderTopPanel?: (props: RenderPanelProps) => ReactNode;
  /** Позволяет добавить панель внизу под выпадающим списком */
  renderBottomPanel?: (props: RenderPanelProps) => ReactNode;
  /**
   * @deprecated Помечено как deprecated в версии 4.9.1, будет удалено в 10.x.x версии.
   * Взамен используйте disableSelectedOptionHighlight
   *
   * Возможность множественного выбора (опции с Checkbox)
   **/
  multiSelection?: boolean;
  /** Количество отображаемых пунктов меню */
  rowCount?: number;
  /** Возможность отключить подсветку выбранной опции
   * (например, при множественном выборе, когда у каждой опции есть Checkbox) */
  disableSelectedOptionHighlight?: boolean;

  /** Отключает функцию выбора опции при нажатии на пробел */
  disableSelectionOnSpace?: boolean;

  /** Отключает функцию выбора опции при нажатии на Enter */
  disableSelectionOnEnter?: boolean;

  onForwardCycleApprove?: () => boolean;
  onBackwardCycleApprove?: () => boolean;
  /** ссылка на контейнер, в котором находится Menu*/
  containerRef?: RefObject<HTMLElement>;
  /** Включение виртуального скролла для меню.
   * Максимальная высота меню рассчитывается исходя из высоты 1 пункта, если параметр 'auto', то в расчет идет
   * высота согласно dimension
   */
  virtualScroll?: {
    /** Фиксированная высота 1 пункта меню, для правильного функционирования виртуального скролла
     * все строки должны быть одной фиксированной высоты
     */
    itemHeight: 'auto' | number;
  };
  /**
   * Сторона от родительского меню, в которой по умолчанию будет появляться дочернее меню при наличии места
   * */
  subMenuRenderDirection?: RenderDirection;
  /** @internal
   * Ссылка на родительское меню для subMenu */
  parentMenuRef?: RefObject<HTMLElement>;
  /** @internal
   * Обработчик события при попытке закрыть subMenu */
  onCloseQuery?: () => void;
  /** @internal
   * Обработчик входа мыши в subMenu (для forgiving navigation) */
  onSubMenuEnter?: () => void;
  /**
   * Признак необходимости активировать меню сразу при появлении
   */
  defaultIsActive?: boolean;

  /** Клик по меню не приводит к перемещению фокуса */
  preventFocusSteal?: boolean;

  /** Признак включения режима с использованием состояния preselected */
  preselectedModeActive?: boolean;

  /** Обработчик события preselected */
  onPreselectItem?: (id?: string) => void;

  /** Обработчик нажатия клавиши на активном меню */
  onMenuKeyDown?: (e: KeyboardEvent) => void;
}

export const Menu = forwardRef<HTMLDivElement | null, MenuProps>(
  (
    {
      model,
      defaultSelected,
      selected,
      preselected,
      active,
      onPreselectItem,
      onSelectItem,
      onDeselectItem,
      onActivateItem,
      renderTopPanel,
      renderBottomPanel,
      dimension = 'l' as MenuDimensions,
      multiSelection = false,
      disableSelectedOptionHighlight = false,
      onForwardCycleApprove,
      onBackwardCycleApprove,
      containerRef,
      virtualScroll,
      rowCount = 6,
      parentMenuRef,
      onCloseQuery,
      onSubMenuEnter,
      defaultIsActive = true,
      subMenuRenderDirection,
      preventFocusSteal,
      maxHeight,
      preselectedModeActive = false,
      onMenuKeyDown,
      disableSelectionOnSpace,
      disableSelectionOnEnter,

      ...props
    },
    ref,
  ) => {
    const findNextId = (currentId?: string | null) => {
      const currentIndex = currentId ? model.findIndex((item) => item.id === currentId) : -1;
      let nextIndex = currentIndex < model.length - 1 ? currentIndex + 1 : 0;
      let finishCycle = false;

      while ((model[nextIndex].disabled || model[nextIndex].readOnly) && !finishCycle) {
        nextIndex = nextIndex < model.length - 1 ? nextIndex + 1 : 0;
        finishCycle = currentIndex === -1 ? nextIndex === 0 : nextIndex === currentIndex;
      }

      const isCycle = currentIndex > -1 && nextIndex < currentIndex;
      const approve = isCycle && onForwardCycleApprove ? onForwardCycleApprove() : true;

      nextIndex = approve ? nextIndex : currentIndex;

      const disabled = model[nextIndex].disabled || model[nextIndex].readOnly;
      return disabled ? undefined : model[nextIndex].id;
    };

    const findPreviousId = (currentId?: string | null) => {
      const currentIndex = currentId ? model.findIndex((item) => item.id === currentId) : -1;
      let prevIndex = currentIndex > 0 ? currentIndex - 1 : model.length - 1;
      let finishCycle = false;

      while ((model[prevIndex].disabled || model[prevIndex].readOnly) && !finishCycle) {
        prevIndex = prevIndex > 0 ? prevIndex - 1 : model.length - 1;
        finishCycle = currentIndex === -1 ? prevIndex === 0 : prevIndex === currentIndex;
      }

      const isCycle = currentIndex > -1 && prevIndex > currentIndex;
      const approve = isCycle && onBackwardCycleApprove ? onBackwardCycleApprove() : true;

      prevIndex = approve ? prevIndex : currentIndex;

      const disabled = model[prevIndex].disabled || model[prevIndex].readOnly;
      return disabled ? undefined : model[prevIndex].id;
    };

    const uncontrolledActiveValue = model.length > 0 ? findNextId() : undefined;
    const [selectedState, setSelectedState] = useState<Array<string>>(
      defaultSelected ? valueToArray(defaultSelected) : [],
    );
    const [activeState, setActiveState] = useState<string | undefined>(uncontrolledActiveValue);
    const [preselectedState, setPreselectedState] = useState<string | undefined>(uncontrolledActiveValue);

    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const subMenuRef = useRef<HTMLDivElement | null>(null);
    const [activeItemElement, setActiveItemElement] = useState<HTMLElement | null>(null);

    const [submenuVisible, setSubmenuVisible] = useState<boolean>(false);

    // Forgiving navigation state
    const forgivingModeRef = useRef<{
      active: boolean;
      triangle: { x1: number; y1: number; x2: number; y2: number; x3: number; y3: number } | null;
      timeoutId: ReturnType<typeof setTimeout> | null;
    }>({ active: false, triangle: null, timeoutId: null });

    const lastScrollEvent = useRef<number | undefined>();

    /**
     * Checks if a point is inside a triangle using barycentric coordinates.
     * This is used to determine if the mouse is moving towards the submenu.
     */
    const isPointInTriangle = (
      px: number,
      py: number,
      triangle: { x1: number; y1: number; x2: number; y2: number; x3: number; y3: number },
    ): boolean => {
      const { x1, y1, x2, y2, x3, y3 } = triangle;

      // Calculate barycentric coordinates
      const denominator = (y2 - y3) * (x1 - x3) + (x3 - x2) * (y1 - y3);
      if (denominator === 0) return false;

      const a = ((y2 - y3) * (px - x3) + (x3 - x2) * (py - y3)) / denominator;
      const b = ((y3 - y1) * (px - x3) + (x1 - x3) * (py - y3)) / denominator;
      const c = 1 - a - b;

      // Point is inside triangle if all barycentric coordinates are >= 0
      return a >= 0 && b >= 0 && c >= 0;
    };

    /**
     * Calculates a triangular "safe zone" from the current mouse position to the submenu.
     * Users can move through this zone without accidentally closing the submenu.
     */
    const calculateForgivingTriangle = (
      mouseX: number,
      mouseY: number,
      submenuElement: HTMLElement | null,
    ): { x1: number; y1: number; x2: number; y2: number; x3: number; y3: number } | null => {
      if (!submenuElement) return null;

      const submenuRect = submenuElement.getBoundingClientRect();

      // Determine if submenu is to the right or left
      // The triangle vertices are: mouse position, top corner of submenu, bottom corner of submenu
      const submenuLeft = submenuRect.left;
      const submenuRight = submenuRect.right;
      const submenuTop = submenuRect.top;
      const submenuBottom = submenuRect.bottom;

      // Add a small buffer to make the triangle slightly wider (more forgiving)
      const buffer = 5;

      // Check if submenu is to the right or left of the menu
      // Use the submenu's position relative to mouse to determine direction
      const isSubmenuOnRight = submenuLeft > mouseX;

      if (isSubmenuOnRight) {
        // Triangle: mouse -> top-left of submenu -> bottom-left of submenu
        return {
          x1: mouseX,
          y1: mouseY,
          x2: submenuLeft - buffer,
          y2: submenuTop - buffer,
          x3: submenuLeft - buffer,
          y3: submenuBottom + buffer,
        };
      } else {
        // Triangle: mouse -> top-right of submenu -> bottom-right of submenu
        return {
          x1: mouseX,
          y1: mouseY,
          x2: submenuRight + buffer,
          y2: submenuTop - buffer,
          x3: submenuRight + buffer,
          y3: submenuBottom + buffer,
        };
      }
    };

    /**
     * Updates the forgiving mode state based on current mouse position.
     * Called on mousemove events to determine if user is still moving towards submenu.
     */
    const updateForgivingMode = (mouseX: number, mouseY: number) => {
      const { active, triangle } = forgivingModeRef.current;

      if (!active || !triangle) return;

      // Check if mouse is still within the triangle
      const isInTriangle = isPointInTriangle(mouseX, mouseY, triangle);

      if (!isInTriangle) {
        // Mouse left the triangle - exit forgiving mode after a small delay
        // This delay makes the experience less jarring
        if (forgivingModeRef.current.timeoutId) {
          clearTimeout(forgivingModeRef.current.timeoutId);
        }

        forgivingModeRef.current.timeoutId = setTimeout(() => {
          forgivingModeRef.current.active = false;
          forgivingModeRef.current.triangle = null;
          forgivingModeRef.current.timeoutId = null;
        }, 100); // 100ms grace period
      } else {
        // Mouse is in triangle - cancel any pending exit
        if (forgivingModeRef.current.timeoutId) {
          clearTimeout(forgivingModeRef.current.timeoutId);
          forgivingModeRef.current.timeoutId = null;
        }
      }
    };

    /**
     * Enters forgiving navigation mode when a submenu opens.
     * Calculates the tolerance triangle and sets up mouse tracking.
     */
    const enterForgivingMode = (mouseX: number, mouseY: number) => {
      // Calculate triangle based on submenu position
      const triangle = calculateForgivingTriangle(mouseX, mouseY, subMenuRef.current);

      if (triangle) {
        forgivingModeRef.current = {
          active: true,
          triangle,
          timeoutId: null,
        };
      }
    };

    /**
     * Exits forgiving navigation mode.
     * Called when submenu closes or user clearly abandons navigation.
     */
    const exitForgivingMode = () => {
      if (forgivingModeRef.current.timeoutId) {
        clearTimeout(forgivingModeRef.current.timeoutId);
      }
      forgivingModeRef.current = {
        active: false,
        triangle: null,
        timeoutId: null,
      };
    };

    useEffect(() => {
      setActiveState(uncontrolledActiveValue);
    }, [model]);

    const innerSelected = disableSelectedOptionHighlight
      ? []
      : selected === undefined
        ? selectedState
        : valueToArray(selected);
    const activeId = active === undefined ? activeState : active;

    const preselectedId = preselectedModeActive
      ? preselected === undefined
        ? preselectedState
        : preselected
      : undefined;

    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    const verticalScrollAriaRef = useRef<HTMLDivElement | null>(null);
    const hasTopPanel = !!renderTopPanel;
    const hasBottomPanel = !!renderBottomPanel;

    const activateItem = (id?: string) => {
      if (activeId !== id) setActiveState(id);
      onActivateItem?.(id);
    };

    const preselectItem = (id?: string) => {
      if (preselectedId !== id) setPreselectedState(id);
      onPreselectItem?.(id);
    };

    const handleClickItem = (id: string) => {
      const item = findModelItem(model, id);
      if (item && !item.disabled && !item.readOnly) {
        const selectedIndex = selectedState.findIndex((itemId) => itemId === id);
        if (multiSelection) {
          if (selectedIndex > -1) {
            setSelectedState(selectedState.splice(selectedIndex, 1));
            onDeselectItem?.(id);
          } else {
            setSelectedState([...selectedState, id]);
            onSelectItem?.(id);
          }
        } else {
          if (selectedIndex === -1) {
            setSelectedState([id]);
          }
          onSelectItem?.(id);
        }
      }
    };

    const { currentActiveMenu, activateMenu, deactivateMenu } = useDropdown(wrapperRef);

    useEffect(() => {
      function handleKeyDown(e: KeyboardEvent) {
        if (currentActiveMenu?.current !== wrapperRef.current) return;

        const code = keyboardKey.getCode(e);
        switch (code) {
          case keyboardKey[' ']: {
            if (disableSelectionOnSpace) break;
            if (preselectedModeActive && !!preselectedId) {
              handleClickItem(preselectedId);
            } else if (activeId) handleClickItem(activeId);

            e.preventDefault();
            break;
          }
          case keyboardKey.Enter: {
            if (disableSelectionOnEnter) break;
            if (preselectedModeActive && !!preselectedId) {
              handleClickItem(preselectedId);
            } else if (activeId) handleClickItem(activeId);

            e.preventDefault();
            break;
          }
          case keyboardKey.ArrowDown: {
            const currentId = preselectedModeActive ? preselectedId || activeId : activeId;

            const nextId = findNextId(currentId);
            if (preselectedModeActive) preselectItem(nextId);
            else activateItem(nextId);

            e.preventDefault();
            break;
          }
          case keyboardKey.ArrowUp: {
            const currentId = preselectedModeActive ? preselectedId || activeId : activeId;

            const previousId = findPreviousId(currentId);
            if (preselectedModeActive) preselectItem(previousId);
            else activateItem(previousId);

            e.preventDefault();
            break;
          }
          case keyboardKey.ArrowRight: {
            const currentId = preselectedModeActive ? preselectedId || activeId : activeId;
            const item = model.find((item) => item.id === currentId);
            if (item && !item.disabled && !item.readOnly && item.subItems && !submenuVisible) {
              setSubmenuVisible(true);
            }

            if (subMenuRef && subMenuRef.current) {
              activateMenu?.(subMenuRef);
            }
            break;
          }
          case keyboardKey.ArrowLeft: {
            if (parentMenuRef && parentMenuRef.current) {
              onCloseQuery?.();
            }
            break;
          }

          default: {
            onMenuKeyDown?.(e);
            break;
          }
        }
      }

      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, [
      active,
      activeId,
      activeState,
      currentActiveMenu,
      preselectedId,
      disableSelectionOnSpace,
      disableSelectionOnEnter,
    ]);

    useEffect(() => {
      if (defaultIsActive) activateMenu?.(wrapperRef);

      return () => {
        if (defaultIsActive && currentActiveMenu === wrapperRef) deactivateMenu?.(wrapperRef);
      };
    }, [defaultIsActive]);

    // Mouse tracking for forgiving navigation
    useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
        if (forgivingModeRef.current.active) {
          updateForgivingMode(e.clientX, e.clientY);
        }
      };

      document.addEventListener('mousemove', handleMouseMove, { passive: true });

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        exitForgivingMode(); // Clean up on unmount
      };
    }, []);

    // Exit forgiving mode when submenu closes
    useEffect(() => {
      if (!submenuVisible) {
        exitForgivingMode();
      }
    }, [submenuVisible]);

    const handleSubMenuClose = () => {
      setSubmenuVisible(false);
      exitForgivingMode(); // Exit forgiving mode when submenu closes
      activateMenu?.(wrapperRef);
    };

    const renderItem = (item: MenuModelItemProps, index: number) => {
      const { id, subItems, render, ...itemProps } = item;
      const hasSubmenu = !!subItems && subItems.length > 0;
      const hovered = activeId === id;
      const selected = innerSelected.includes(id) || hasSelectedChildren(item, innerSelected);
      const preselected = preselectedId !== undefined ? preselectedId === id : undefined;
      const renderProps = {
        hovered,
        preselected,
        selected,
        onLeave: (e: MouseEvent<HTMLDivElement>) => {
          const relTarget = e.relatedTarget;

          // Check if we're in forgiving mode - if so, don't close the submenu yet
          // The user might be navigating towards the submenu through the tolerance triangle
          if (forgivingModeRef.current.active) {
            return;
          }

          if (
            relTarget &&
            Object.hasOwn(relTarget, 'nodeName') && // необходимо чтобы проверить действительно ли это Node
            !subMenuRef.current?.contains(relTarget as Node) &&
            !verticalScrollAriaRef.current?.contains(relTarget as Node)
          ) {
            setSubmenuVisible(false);
            exitForgivingMode();
          }
        },
        onHover: (e: MouseEvent<HTMLDivElement>) => {
          // If we're in forgiving mode, check if the mouse is still in the tolerance triangle
          // This prevents accidentally switching menu items when moving towards a submenu
          if (forgivingModeRef.current.active && forgivingModeRef.current.triangle) {
            const isInTriangle = isPointInTriangle(
              e.clientX,
              e.clientY,
              forgivingModeRef.current.triangle,
            );

            // If mouse is still in the triangle (moving towards submenu), ignore this hover event
            // This is the core of the forgiving navigation - we don't switch items prematurely
            if (isInTriangle && activeId !== id) {
              return;
            }
          }

          // Exit forgiving mode when switching to a different item
          if (activeId !== id) {
            exitForgivingMode();
          }

          activateItem(id);
          setSubmenuVisible(hasSubmenu);
          setActiveItemElement(e.currentTarget as HTMLDivElement);

          // If this item has a submenu and we're opening it, enter forgiving mode
          // This allows the user to move their mouse towards the submenu without it closing
          if (hasSubmenu) {
            // We need to wait a moment for the submenu to render before calculating the triangle
            // Using requestAnimationFrame ensures the DOM is updated
            requestAnimationFrame(() => {
              enterForgivingMode(e.clientX, e.clientY);
            });
          }
        },
        onMouseDown: preventFocusSteal ? (e: MouseEvent<HTMLElement>) => e.preventDefault() : undefined,
        onClick: () => handleClickItem(id),
        hasSubmenu,
        disabled: itemProps.disabled,
        ...itemProps,
      } as const;
      if (typeof render === 'function') return render({ containerRef, ...renderProps });

      return (
        <MenuItem key={`${item.id}-${index}`} {...renderProps}>
          {render}
        </MenuItem>
      );
    };

    const renderChildren = () => {
      return model.map((item, index) => {
        return renderItem({ dimension, ...item }, index);
      });
    };

    const renderVirtualChildren = () => {
      if (!virtualScroll) return null;

      const itemHeight = virtualScroll.itemHeight === 'auto' ? getItemHeight(dimension) : virtualScroll.itemHeight;

      return (
        <VirtualBody
          scrollContainerRef={scrollContainerRef}
          itemHeight={itemHeight}
          model={model}
          rowCount={rowCount}
          activeId={activeId}
          selected={innerSelected}
          onRenderItem={renderItem}
        />
      );
    };

    const previousActive = useRef<string | undefined | null>();
    const previousActiveState = useRef<string | undefined>();
    const previousPreselected = useRef<string | undefined>();
    const previousPreselectedState = useRef<string | undefined>();

    useLayoutEffect(() => {
      setTimeout(() => {
        let itemToScroll;

        if ((active && previousActive.current !== active) || previousActiveState.current !== activeState) {
          itemToScroll = scrollContainerRef.current?.querySelector('[data-hovered="true"]');
        } else if (
          (preselected && previousPreselected.current !== preselected) ||
          previousPreselectedState.current !== preselectedState
        ) {
          itemToScroll = scrollContainerRef.current?.querySelector('[data-preselected="true"]');
        }

        if (itemToScroll) {
          const scrollEventTime = Date.now();
          const lastEventTime = lastScrollEvent.current;
          itemToScroll?.scrollIntoView({
            behavior: !lastEventTime || scrollEventTime - lastEventTime < 150 ? 'auto' : 'smooth',
            inline: 'center',
            block: 'nearest',
          });

          lastScrollEvent.current = scrollEventTime;
          previousActive.current = active;
          previousActiveState.current = activeState;
          previousPreselected.current = preselected;
          previousPreselectedState.current = preselectedState;
        }
      }, 0);
    }, [active, activeState, preselected, preselectedState, model]);

    const renderSubMenu = () => {
      const activeItem = model.find((item) => item.id === activeId);

      return (
        activeItem &&
        activeItem.subItems &&
        activeItem.subItems.length > 0 && (
          <Menu
            ref={subMenuRef}
            dimension={dimension}
            parentMenuRef={wrapperRef}
            model={activeItem.subItems}
            subMenuRenderDirection={subMenuRenderDirection}
            onCloseQuery={handleSubMenuClose}
            onSubMenuEnter={exitForgivingMode}
            selected={innerSelected}
            onSelectItem={(id) => handleClickItem(id)}
            virtualScroll={virtualScroll}
            rowCount={rowCount}
            maxHeight={maxHeight}
            preventFocusSteal
          />
        )
      );
    };

    const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
      if (currentActiveMenu !== wrapperRef) activateMenu?.(wrapperRef);

      // If this menu is a submenu and user's mouse entered it, notify parent to exit forgiving mode
      // The user has successfully navigated to the submenu
      if (parentMenuRef) {
        onSubMenuEnter?.();
      }

      props.onMouseEnter?.(e);
    };

    const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
      activateItem(undefined);
      props.onMouseLeave?.(e);
    };

    const handleClickOutside = () => {
      setSubmenuVisible(false);
    };

    const handleFocus = (e: FocusEvent<HTMLDivElement>) => {
      if (currentActiveMenu !== wrapperRef) activateMenu?.(wrapperRef);
      props.onFocus?.(e);
    };

    const handleBlur = (e: FocusEvent<HTMLDivElement>) => {
      if (currentActiveMenu === wrapperRef) deactivateMenu?.(wrapperRef);
      props.onBlur?.(e);
    };

    const menuProps = passMenuDataAttributes(props);

    // при скролле меню возникают ситуации когда активная опция выходит из видимой области
    // и открытое субменю может странным образом позиционироваться "оторванным" от породившего меню
    useEffect(() => {
      if (!activeItemElement || !scrollContainerRef.current) return;

      const options = {
        root: scrollContainerRef.current,
        rootMargin: '0px',
        threshold: 0.5,
      } satisfies IntersectionObserverInit;

      const intersectionCallback: IntersectionObserverCallback = (entries) => {
        entries.forEach((entry) => {
          setSubmenuVisible(!(entry.intersectionRatio < options.threshold));
        });
      };

      const observer = new IntersectionObserver(intersectionCallback, options);
      observer.observe(activeItemElement);
      return () => observer.disconnect();
    }, [activeItemElement]);

    return (
      <Wrapper
        ref={refSetter(wrapperRef, ref)}
        $dimension={dimension}
        $hasTopPanel={hasTopPanel}
        $hasBottomPanel={hasBottomPanel}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      >
        {hasTopPanel && renderTopPanel({ dimension })}

        <StyledScrollContainer
          $dimension={dimension}
          $rowCount={rowCount}
          $hasTopPanel={hasTopPanel}
          $hasBottomPanel={hasBottomPanel}
          $maxHeight={maxHeight}
          {...menuProps}
          verticalScrollProps={{ ref: verticalScrollAriaRef }}
          contentBlockProps={{ ref: scrollContainerRef }}
        >
          {virtualScroll ? renderVirtualChildren() : renderChildren()}
        </StyledScrollContainer>

        {submenuVisible && activeItemElement && (
          <SubMenuContainer
            targetElement={activeItemElement}
            defaultRenderDirection={subMenuRenderDirection}
            onClickOutside={!parentMenuRef ? handleClickOutside : undefined}
          >
            {renderSubMenu()}
          </SubMenuContainer>
        )}
        {hasBottomPanel && renderBottomPanel({ dimension })}
      </Wrapper>
    );
  },
);

Menu.displayName = 'Menu';

export type { MenuDimensions } from '#src/components/Menu/types';
