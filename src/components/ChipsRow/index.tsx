import type { HTMLAttributes, ReactNode } from 'react';
import { forwardRef, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

import { Chips } from '#src/components/Chips';
import type { ChipDimension, ChipsProps } from '#src/components/Chips';
import { checkOverflow } from '#src/components/common/utils/checkOverflow';
import { debounce } from '#src/components/common/utils/debounce';
import { refSetter } from '#src/components/common/utils/refSetter';
import { StyledDropdownContainer } from '#src/components/DropdownContainer';
import { Menu } from '#src/components/Menu';
import type { MenuModelItemProps } from '#src/components/Menu/MenuItem';

import { HiddenContainer, VisibleContainer, Wrapper, OverflowChip } from './style';

export interface ChipItemProps {
  /** Уникальный идентификатор чипса */
  id: string;
  /** Содержимое чипса */
  content: ReactNode;
  /** Отключение чипса */
  disabled?: boolean;
  /** Выбранная чипса */
  selected?: boolean;
  /** Иконка перед текстом */
  iconStart?: ReactNode;
  /** Иконка после текста */
  iconEnd?: ReactNode;
  /** Число для Badge */
  badge?: number;
}

export interface ChipsRowProps extends HTMLAttributes<HTMLDivElement> {
  /** Массив чипсов для отображения */
  items: ChipItemProps[];
  /** Размер чипсов */
  dimension?: ChipDimension;
  /** Вид чипсов */
  appearance?: 'filled' | 'outlined';
  /** Обработчик закрытия чипса */
  onChipClose?: (chipId: string) => void;
  /** Обработчик клика по чипсу */
  onChipClick?: (chipId: string) => void;
  /**
   * Обработчик клика по чипсу переполнения (+X).
   * Если не указан, будет показан dropdown с overflow чипсами.
   * Если указан, отображение dropdown контролируется пользователем.
   */
  onMoreClick?: () => void;
  /** Дополнительные пропсы для чипсов */
  chipProps?: Partial<Omit<ChipsProps, 'children' | 'id'>>;
}

interface ChipWidthMap {
  chipId: string;
  width: number;
}

export const ChipsRow = forwardRef<HTMLDivElement, ChipsRowProps>(
  (
    {
      items,
      dimension = 'm',
      appearance = 'outlined',
      onChipClose,
      onChipClick,
      onMoreClick,
      chipProps,
      ...props
    },
    ref,
  ) => {
    const [containerWidth, setContainerWidth] = useState(0);
    const visibleContainerRef = useRef<HTMLDivElement | null>(null);
    const hiddenContainerRef = useRef<HTMLDivElement | null>(null);
    const [overflowState, setOverflowState] = useState(false);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const overflowChipRef = useRef<HTMLDivElement | null>(null);

    const [visibleChips, setVisibleChips] = useState<string[]>([]);
    const [hiddenChips, setHiddenChips] = useState<string[]>([]);
    const [chipWidthMap, setChipWidthMap] = useState<ChipWidthMap[]>([]);

    // Отслеживание ширины видимого контейнера
    useLayoutEffect(() => {
      if (visibleContainerRef.current) {
        const resizeObserver = new ResizeObserver((entries) => {
          entries.forEach((entry) => setContainerWidth(entry.contentRect.width || 0));
        });
        resizeObserver.observe(visibleContainerRef.current);
        return () => {
          resizeObserver.disconnect();
        };
      }
    }, [visibleContainerRef, dimension]);

    // Измерение ширины каждого чипса
    useEffect(() => {
      const setChipWidth = () => {
        if (hiddenContainerRef.current) {
          const overflow = checkOverflow(hiddenContainerRef.current);
          if (overflowState !== overflow) setOverflowState(overflow);

          const widths: ChipWidthMap[] = [];
          const children = Array.from(hiddenContainerRef.current.children);

          items.forEach((item, index) => {
            const element = children[index] as HTMLElement;
            if (element) {
              // Учитываем margin между элементами (gap)
              const computedStyle = window.getComputedStyle(hiddenContainerRef.current!);
              const gap = parseInt(computedStyle.gap || '0', 10);
              widths.push({
                chipId: item.id,
                width: element.offsetWidth + (index > 0 ? gap : 0),
              });
            }
          });

          setChipWidthMap(widths);
        }
      };

      if (hiddenContainerRef.current?.firstElementChild) {
        const resizeObserver = new ResizeObserver(debounce(setChipWidth, 100));
        resizeObserver.observe(hiddenContainerRef.current.firstElementChild);
        return () => {
          resizeObserver.disconnect();
        };
      }
    }, [hiddenContainerRef, containerWidth, items, overflowState]);

    // Расчет видимых и скрытых чипсов
    useEffect(() => {
      const newVisibleChips: string[] = [];
      const newHiddenChips: string[] = [];

      if (visibleContainerRef.current && chipWidthMap.length > 0) {
        const maxWidth = containerWidth;
        // Резервируем место для overflow chip (+X) - примерно 60px
        const overflowChipWidth = 60;
        const computedStyle = window.getComputedStyle(visibleContainerRef.current);
        const gap = parseInt(computedStyle.gap || '0', 10);

        let availableWidth = maxWidth;
        let currentWidth = 0;
        let hasOverflow = false;

        chipWidthMap.forEach(({ chipId, width }, index) => {
          const widthWithGap = index === 0 ? width : width;

          // Проверяем, поместится ли текущий чипс
          if (currentWidth + widthWithGap <= availableWidth) {
            // Проверяем, есть ли еще чипсы после этого
            const hasMoreChips = index < chipWidthMap.length - 1;

            if (hasMoreChips) {
              // Проверяем, поместится ли следующий чипс
              const nextChipWidth = chipWidthMap[index + 1]?.width || 0;
              if (currentWidth + widthWithGap + nextChipWidth + overflowChipWidth + gap <= availableWidth) {
                newVisibleChips.push(chipId);
                currentWidth += widthWithGap;
              } else {
                // Следующий чипс не поместится, добавляем текущий в скрытые
                newHiddenChips.push(chipId);
                hasOverflow = true;
              }
            } else {
              // Это последний чипс
              newVisibleChips.push(chipId);
              currentWidth += widthWithGap;
            }
          } else {
            newHiddenChips.push(chipId);
            hasOverflow = true;
          }
        });

        setOverflowState(hasOverflow && newHiddenChips.length > 0);
      }

      setVisibleChips(newVisibleChips);
      setHiddenChips(newHiddenChips);
    }, [visibleContainerRef, containerWidth, chipWidthMap]);

    // Создаем массив для рендеринга всех чипсов (для скрытого контейнера)
    const allChipsElements = useMemo(() => {
      return items.map((item) => (
        <Chips
          key={item.id}
          dimension={dimension}
          appearance={appearance}
          disabled={item.disabled}
          selected={item.selected}
          iconStart={item.iconStart}
          iconEnd={item.iconEnd}
          badge={item.badge}
          {...chipProps}
        >
          {item.content}
        </Chips>
      ));
    }, [items, dimension, appearance, chipProps]);

    // Создаем массив для рендеринга видимых чипсов
    const visibleChipsElements = useMemo(() => {
      return items
        .filter((item) => visibleChips.includes(item.id))
        .map((item) => (
          <Chips
            key={item.id}
            dimension={dimension}
            appearance={appearance}
            disabled={item.disabled}
            selected={item.selected}
            iconStart={item.iconStart}
            iconEnd={item.iconEnd}
            badge={item.badge}
            onClose={onChipClose ? () => onChipClose(item.id) : undefined}
            onClick={onChipClick ? () => onChipClick(item.id) : undefined}
            {...chipProps}
          >
            {item.content}
          </Chips>
        ));
    }, [items, visibleChips, dimension, appearance, onChipClose, onChipClick, chipProps]);

    // Обработчик клика по overflow chip
    const handleOverflowChipClick = () => {
      if (onMoreClick) {
        onMoreClick();
      } else {
        setDropdownVisible(!dropdownVisible);
      }
    };

    // Создаем menu items для dropdown
    const menuItems: MenuModelItemProps[] = useMemo(() => {
      return items
        .filter((item) => hiddenChips.includes(item.id))
        .map((item) => ({
          id: item.id,
          render: item.content,
          disabled: item.disabled,
        }));
    }, [items, hiddenChips]);

    const handleClickOutside = () => {
      setDropdownVisible(false);
    };

    const handleMenuItemSelect = (chipId: string) => {
      if (onChipClick) {
        onChipClick(chipId);
      }
      setDropdownVisible(false);
    };

    return (
      <Wrapper ref={ref} {...props}>
        {/* Скрытый контейнер для измерения ширины чипсов */}
        <HiddenContainer ref={hiddenContainerRef}>{allChipsElements}</HiddenContainer>

        {/* Видимый контейнер с чипсами */}
        <VisibleContainer ref={visibleContainerRef}>
          {visibleChipsElements}

          {/* Overflow chip (+X) */}
          {overflowState && hiddenChips.length > 0 && (
            <OverflowChip
              ref={overflowChipRef}
              dimension={dimension}
              appearance={appearance}
              onClick={handleOverflowChipClick}
              {...chipProps}
            >
              +{hiddenChips.length}
            </OverflowChip>
          )}
        </VisibleContainer>

        {/* Dropdown с overflow чипсами */}
        {!onMoreClick && dropdownVisible && overflowState && overflowChipRef.current && (
          <StyledDropdownContainer targetElement={overflowChipRef.current} onClickOutside={handleClickOutside}>
            <Menu model={menuItems} dimension={dimension} onSelectItem={handleMenuItemSelect} />
          </StyledDropdownContainer>
        )}
      </Wrapper>
    );
  },
);

ChipsRow.displayName = 'ChipsRow';
