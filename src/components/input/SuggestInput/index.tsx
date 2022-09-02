import * as React from 'react';
import { changeInputData } from '#src/components/common/dom/changeInputData';
import { keyboardKey } from '#src/components/common/keyboardKey';
import { refSetter } from '#src/components/common/utils/refSetter';
import { ReactComponent as SearchOutlineSVG } from '@admiral-ds/icons/build/system/SearchOutline.svg';
import styled, { ThemeContext } from 'styled-components';
import { TextInput, TextInputProps } from '../TextInput';
import { Dropdown as DropComponent } from '#src/components/Dropdown';
import { MessagePanel } from './MessagePanel';
import { SuggestPanel } from './SuggestPanel';
import { InputIconButton } from '#src/components/InputIconButton';
import type { InputStatus } from '#src/components/input/types';
import { LIGHT_THEME } from '#src/components/themes';

const Dropdown = styled(DropComponent)`
  padding: 8px 0;
`;

const StyledDropDown = styled(Dropdown)<{ dropMaxHeight: string | number }>`
  padding: 8px 0;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: ${(p) => p.dropMaxHeight};
  min-width: 100%;
`;

export interface SuggestItem {
  searchText: string;
}

export interface SuggestInputProps extends Omit<TextInputProps, 'value'> {
  value?: string;

  /** @deprecated Используйте locale.emptyMessage */
  isEmptyMessage?: string;

  /** Обработчик выбора опции (дефолтный обработчик подставляет значение опции в поле ввода) */
  onOptionSelect?: (value: string) => void;

  /** Список вариантов для отображения в опциях */
  options?: string[];

  /** Референс на контейнер для правильного позиционирования выпадающего списка */
  portalTargetRef?: React.RefObject<HTMLElement>;

  onSearchButtonClick?: React.MouseEventHandler<SVGSVGElement>;

  /**
   * Позволяет выравнивать позицию дропдаун контейнера относительно селекта.
   * Принимает стандартные значения css свойства align-self (auto | flex-start | flex-end | center | baseline | stretch)
   */
  alignDropdown?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';

  /** Задает максимальную высоту контейнера с опциями */
  dropMaxHeight?: string | number;

  /**
   * Компонент для отображения альтернативной иконки
   */
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

  /** Статус поля */
  status?: InputStatus;

  /** Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
   * по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме
   **/
  locale?: {
    /** Текст сообщения при отсутствии вариантов для подстановки */
    emptyMessage?: React.ReactNode;
  };
}

export const SuggestInput = React.forwardRef<HTMLInputElement, SuggestInputProps>(
  (
    {
      isLoading,
      onOptionSelect,
      alignDropdown = 'stretch',
      dropMaxHeight = '300px',
      onSearchButtonClick = () => undefined,
      icons,
      icon = SearchOutlineSVG,
      isEmptyMessage: userEmptyMessage,
      skeleton = false,
      status,
      locale,
      ...props
    },
    ref,
  ) => {
    const theme = React.useContext(ThemeContext) || LIGHT_THEME;
    const isControlledComponentValue = undefined !== props.value;
    const { options, portalTargetRef } = props;

    const inputRef = React.useRef<HTMLInputElement | null>(null);
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [isSuggestPanelOpen, setIsSuggestPanelOpen] = React.useState<boolean>(false);
    const [isFocused, setIsFocused] = React.useState<boolean>(false);

    const [, forceUpdate] = React.useReducer((x) => x + 1, 0);

    const handleOptionSelect = () => {
      const value = options?.[activeIndex] || '';

      onOptionSelect?.(value);

      if (!isControlledComponentValue && inputRef.current) {
        const cursorPosition = value.length;
        changeInputData(inputRef.current, { value, selectionStart: cursorPosition, selectionEnd: cursorPosition });
      }

      setIsSuggestPanelOpen(false);
    };

    const handleOptionClick = (e: React.MouseEvent) => {
      e.preventDefault();
      handleOptionSelect();
    };

    React.useEffect(() => {
      if (options) {
        setIsSuggestPanelOpen(isFocused);
      }
    }, [isFocused, options]);

    const handleKeyUp = (e: React.KeyboardEvent) => {
      if (!options) return;
      switch (e.key) {
        case 'Enter':
          handleOptionSelect();
          break;
        case 'ArrowUp':
          if (activeIndex <= 0) {
            setActiveIndex(options.length - 1);
          } else {
            setActiveIndex(activeIndex - 1);
          }
          break;
        case 'ArrowDown':
          if (activeIndex >= options.length - 1) {
            setActiveIndex(0);
          } else {
            setActiveIndex(activeIndex + 1);
          }
          break;
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      const code = keyboardKey.getCode(e);

      // prevent submit form on Enter press when selection is available
      if (code === keyboardKey.Enter && isSuggestPanelOpen) {
        e.preventDefault();
      }
    };

    const [blurTrigger, triggerDelayedBlur] = React.useState<undefined | unknown>();

    React.useEffect(() => {
      if (blurTrigger) {
        const timeoutID = setTimeout(() => setIsFocused(false), 200);
        return () => clearTimeout(timeoutID);
      }
    }, [blurTrigger, setIsFocused]);

    React.useEffect(() => {
      function onInputChange(this: HTMLInputElement) {
        if (!props.onInput) forceUpdate();
      }

      if (inputRef.current) {
        const node = inputRef.current;
        node.addEventListener('input', onInputChange);
        return () => {
          node.removeEventListener('input', onInputChange);
        };
      }
    }, [props.onInput]);

    const iconArray = React.Children.toArray(icons);

    if (!props.readOnly) {
      iconArray.push(<InputIconButton icon={icon} onClick={onSearchButtonClick} aria-hidden />);
    }

    const emptyAtLoading: boolean = (options || []).length === 0 && !!isLoading;

    return (
      <TextInput
        {...props}
        ref={refSetter(ref, inputRef)}
        icons={iconArray}
        status={status}
        skeleton={skeleton}
        isLoading={isLoading}
        onKeyUp={(...p) => {
          props.onKeyUp?.(...p);
          handleKeyUp(...p);
        }}
        onKeyDown={(...p) => {
          props.onKeyDown?.(...p);
          handleKeyDown(...p);
        }}
        onFocus={(...p) => {
          props.onFocus?.(...p);
          setIsFocused(true);
        }}
        onBlur={(...p) => {
          props.onBlur?.(...p);
          triggerDelayedBlur({});
        }}
        showTooltip={!isSuggestPanelOpen}
      >
        {options && isSuggestPanelOpen && !skeleton && !emptyAtLoading && (
          <StyledDropDown
            targetRef={portalTargetRef || inputRef}
            alignSelf={alignDropdown}
            dropMaxHeight={dropMaxHeight}
            data-dimension={props.dimension || TextInput.defaultProps?.dimension}
          >
            {options.length === 0 && !isLoading ? (
              <MessagePanel>
                {userEmptyMessage ||
                  locale?.emptyMessage ||
                  theme.locales[theme.currentLocale].suggestInput.emptyMessage}
              </MessagePanel>
            ) : (
              options.map((text, index) => (
                <SuggestPanel
                  key={index}
                  text={text}
                  active={index === activeIndex}
                  searchText={props.value || inputRef.current?.value || ''}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseDown={handleOptionClick}
                  onKeyUp={handleKeyUp}
                />
              ))
            )}
          </StyledDropDown>
        )}
      </TextInput>
    );
  },
);

SuggestInput.displayName = 'SuggestInput';
