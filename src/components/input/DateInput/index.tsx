import * as React from 'react';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as CalendarSVG } from '@admiral-ds/icons/build/system/CalendarSolid.svg';
import { TextInput, TextInputProps } from '../TextInput';
import { Calendar as CalendarBase, CalendarPropType } from '#src/components/Calendar';
import { refSetter } from '#src/components/common/utils/refSetter';
import { defaultDateInputHandle } from '#src/components/input/DateInput/defaultDateInputHandle';
import { changeInputData } from '#src/components/common/dom/changeInputData';
import { Dropdown as DropdownComponent } from '#src/components/Dropdown';
import { isValidDate } from './isValidDate';
import { defaultParser } from './defaultParser';
import { defaultDateRangeInputHandle } from '#src/components/input/DateInput/defaultDateRangeInputHandle';

const Dropdown = styled(DropdownComponent)<{ alignDropdown?: string }>`
  align-self: ${(p) => (p.alignSelf ? p.alignSelf : 'end')};
`;

const Calendar = styled(CalendarBase)`
  border-radius: 4px;
`;

const Input = styled(TextInput)`
  input {
    letter-spacing: 1px;
  }
`;

const Icon = styled(CalendarSVG)`
  & *[fill^='#'] {
    fill: ${(props) => props.theme.color.text.secondary};
  }

  [disabled] & {
    pointer-events: none;
    & *[fill^='#'] {
      fill: ${(props) => props.theme.color.text.tertiary};
    }
  }

  &:hover {
    cursor: pointer;
  }

  &:hover *[fill^='#'] {
    fill: ${(props) => props.theme.color.basic.hover};
  }
`;

// IE11 fix toLocaleDateString('ru') extra invisible characters by using .replace(/[^ -~]/g,'')
function defaultFormatter(isoValues: string[], joinString = ' - '): string {
  return isoValues
    .map((iso) => new Date(iso))
    .map((date) => (isValidDate(date) ? date.toLocaleDateString('ru').replace(/[^ -~]/g, '') : '__.__.____'))
    .join(joinString);
}

export interface DateInputProps extends TextInputProps, Omit<CalendarPropType, 'onChange'> {
  /** Устанавливает тип ввода даты или интервала даты*/
  type?: 'date' | 'date-range';

  /** Устанавливает начальное состояние видимости календаря */
  defaultIsCalendarOpen?: boolean;

  formatter?: (isoValues: string[], joinString?: string) => string;
  parser?: (stringValue?: string, isDateRangeValue?: boolean) => Date[];

  /**
   * Позволяет выравнивать позицию календаря относительно инпута.
   * Принимает стандартные значения css свойства align-self (start, end, center)
   */
  alignDropdown?: string;
  /** Ref для календаря */
  calendarRef?: React.RefObject<HTMLDivElement>;
}

export const DateInput = React.forwardRef<HTMLInputElement, DateInputProps>(
  (
    {
      type = 'date',
      defaultIsCalendarOpen = false,
      formatter = defaultFormatter,
      parser = defaultParser,
      minDate,
      maxDate,
      validator,
      filterDate,
      localeName,
      alignDropdown = 'end',
      currentActiveView,
      currentActiveViewImportant,
      onMonthSelect,
      onYearSelect,
      onViewEnter,
      onViewLeave,
      onViewMonthSelect,
      onViewYearSelect,
      selected,
      calendarRef,
      ...props
    },
    ref,
  ) => {
    const calendarProps = {
      minDate,
      maxDate,
      validator,
      filterDate,
      localeName,
      currentActiveView,
      currentActiveViewImportant,
      onMonthSelect,
      onYearSelect,
      onViewEnter,
      onViewLeave,
      onViewMonthSelect,
      onViewYearSelect,
      selected,
    };
    const isDateRange = type === 'date-range';
    const handleInput = props.handleInput || (isDateRange ? defaultDateRangeInputHandle : defaultDateInputHandle);
    const [calendarValue, setCalendarValue] = useState<Date | (Date | null)[] | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const inputContainerRef = useRef<HTMLDivElement>(null);
    const [isCalendarOpen, setCalendarOpen] = useState<boolean>(defaultIsCalendarOpen);

    const [startDate, endDate, selectedCalendarValue] = Array.isArray(calendarValue)
      ? calendarValue
      : [undefined, undefined, calendarValue];

    const handleCalendarChange = (maybeDate: Date | (Date | null)[] | null) => {
      setCalendarValue(maybeDate);
      if (inputRef.current) {
        if (!maybeDate) {
          changeInputData(inputRef.current, { value: '' });
          return;
        }

        const values = Array.isArray(maybeDate) ? maybeDate : [maybeDate];
        const toFormatValues = values
          .map((date) => (date ? new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())) : date))
          .map((date) => (date ? date.toISOString().substring(0, 10) : ''));
        const value = formatter(toFormatValues);
        changeInputData(inputRef.current, { value });

        if (isDateRange) {
          if (!values.includes(null)) {
            setCalendarOpen(false);
          }
        } else {
          setCalendarOpen(false);
        }
      }
    };

    const handleBlurCalendarContainer = () => {
      setCalendarOpen(false);
    };

    const handleButtonClick = () => {
      const calValue = parser(inputRef.current?.value, isDateRange);
      setCalendarValue(calValue);
      setCalendarOpen(!isCalendarOpen);
    };

    return (
      <Input
        {...props}
        ref={refSetter(ref, inputRef)}
        handleInput={handleInput}
        icons={props.readOnly ? undefined : <Icon onClick={handleButtonClick} tabIndex={0} />}
        containerRef={inputContainerRef}
      >
        {isCalendarOpen && (
          <Dropdown targetRef={inputRef} onClickOutside={handleBlurCalendarContainer}>
            <Calendar
              {...calendarProps}
              ref={calendarRef}
              selected={selectedCalendarValue}
              startDate={startDate}
              endDate={endDate}
              onChange={handleCalendarChange}
              range={isDateRange}
            />
          </Dropdown>
        )}
      </Input>
    );
  },
);

DateInput.defaultProps = { dimension: 'm' };
DateInput.displayName = 'DateInput';
