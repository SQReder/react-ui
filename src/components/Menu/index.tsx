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
    const submenuCloseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const mousePositions = useRef<Array<{ x: number; y: number }>>([]);

    const lastScrollEvent = useRef<number | undefined>();

    useEffect(() => {
      setActiveState(uncontrolledActiveValue);
    }, [model]);

    // Track mouse position for safety triangle calculation
    useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
        mousePositions.current.push({ x: e.pageX, y: e.pageY });
        // Keep only last 3 positions
        if (mousePositions.current.length > 3) {
          mousePositions.current.shift();
        }
      };

      document.addEventListener('mousemove', handleMouseMove);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);

    // Cleanup submenu close timeout on unmount
    useEffect(() => {
      return () => {
        if (submenuCloseTimeoutRef.current) {
          clearTimeout(submenuCloseTimeoutRef.current);
        }
      };
    }, []);

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

    const handleSubMenuClose = () => {
      // Clear any pending timeout when explicitly closing submenu
      if (submenuCloseTimeoutRef.current) {
        clearTimeout(submenuCloseTimeoutRef.current);
        submenuCloseTimeoutRef.current = null;
      }
      setSubmenuVisible(false);
      activateMenu?.(wrapperRef);
    };

    /**
     * Calculate if mouse is moving toward the open submenu using slope analysis.
     * This implements the "safety triangle" pattern from jQuery-menu-aim.
     */
    const isMovingTowardSubmenu = (): boolean => {
      if (!subMenuRef.current || mousePositions.current.length < 2) {
        return false;
      }

      const submenuRect = subMenuRef.current.getBoundingClientRect();
      const currentPos = mousePositions.current[mousePositions.current.length - 1];
      const previousPos = mousePositions.current[mousePositions.current.length - 2];

      if (!currentPos || !previousPos) return false;

      // Helper function to calculate slope between two points
      const slope = (a: { x: number; y: number }, b: { x: number; y: number }) => {
        return (b.y - a.y) / (b.x - a.x);
      };

      // Determine submenu position (left or right of parent)
      const submenuOnRight = submenuRect.left > (activeItemElement?.getBoundingClientRect().right || 0);

      // Define the two corners of the submenu that form the triangle
      let decreasingCorner: { x: number; y: number };
      let increasingCorner: { x: number; y: number };

      if (submenuOnRight) {
        // Submenu is to the right
        decreasingCorner = { x: submenuRect.left, y: submenuRect.top };
        increasingCorner = { x: submenuRect.left, y: submenuRect.bottom };
      } else {
        // Submenu is to the left
        decreasingCorner = { x: submenuRect.right, y: submenuRect.bottom };
        increasingCorner = { x: submenuRect.right, y: submenuRect.top };
      }

      // Calculate slopes from current and previous positions to the corners
      const currentDecreasingSlope = slope(currentPos, decreasingCorner);
      const currentIncreasingSlope = slope(currentPos, increasingCorner);
      const previousDecreasingSlope = slope(previousPos, decreasingCorner);
      const previousIncreasingSlope = slope(previousPos, increasingCorner);

      // Mouse is moving toward submenu if slopes are converging toward the submenu area
      if (submenuOnRight) {
        return currentDecreasingSlope < previousDecreasingSlope && currentIncreasingSlope > previousIncreasingSlope;
      } else {
        return currentDecreasingSlope > previousDecreasingSlope && currentIncreasingSlope < previousIncreasingSlope;
      }
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
          if (
            relTarget &&
            Object.hasOwn(relTarget, 'nodeName') && // необходимо чтобы проверить действительно ли это Node
            !subMenuRef.current?.contains(relTarget as Node) &&
            !verticalScrollAriaRef.current?.contains(relTarget as Node)
          ) {
            // Safety triangle: only delay if mouse is moving toward the open submenu
            if (submenuVisible && isMovingTowardSubmenu()) {
              submenuCloseTimeoutRef.current = setTimeout(() => {
                setSubmenuVisible(false);
              }, 300);
            } else {
              // Immediately close if not moving toward submenu
              setSubmenuVisible(false);
            }
          }
        },
        onHover: (e: MouseEvent<HTMLDivElement>) => {
          // Clear any pending submenu close timeout (safety triangle)
          if (submenuCloseTimeoutRef.current) {
            clearTimeout(submenuCloseTimeoutRef.current);
            submenuCloseTimeoutRef.current = null;
          }
          activateItem(id);
          setSubmenuVisible(hasSubmenu);
          setActiveItemElement(e.currentTarget as HTMLDivElement);
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
      props.onMouseEnter?.(e);
    };

    const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
      activateItem(undefined);
      props.onMouseLeave?.(e);
    };

    const handleClickOutside = () => {
      // Clear any pending timeout when clicking outside
      if (submenuCloseTimeoutRef.current) {
        clearTimeout(submenuCloseTimeoutRef.current);
        submenuCloseTimeoutRef.current = null;
      }
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
          const shouldBeVisible = !(entry.intersectionRatio < options.threshold);
          if (!shouldBeVisible && submenuCloseTimeoutRef.current) {
            // Clear any pending timeout when hiding due to scroll
            clearTimeout(submenuCloseTimeoutRef.current);
            submenuCloseTimeoutRef.current = null;
          }
          setSubmenuVisible(shouldBeVisible);
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
