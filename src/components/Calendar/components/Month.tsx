import type { FC } from 'react';
import * as React from 'react';
import { useTheme } from 'styled-components';
import { LIGHT_THEME } from '#src/components/themes';

import { addWeeks, startOfMonth, startOfWeek } from '../date-utils';
import { Week } from './Week';
import type { IMonthCalendarProps } from '../interfaces';

const FIXED_WEEK_COUNT = 6;

export const Month: FC<IMonthCalendarProps> = ({
  day,
  startDate,
  endDate,
  selected,
  activeDate,
  range,
  validator,
  filterDate,
  onMouseEnter,
  onMouseLeave,
  onClick,
  highlightSpecialDay,
}) => {
  const theme = useTheme() || LIGHT_THEME;
  const weeks: Array<Date> = [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMouseEnter = (day: Date, event: any) => onMouseEnter && onMouseEnter(day, event);
  const handleMouseLeave = () => onMouseLeave && onMouseLeave();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDayClick = (day: Date, event: any) => onClick && onClick(day, event);

  let weekIndex = 0;
  let weekStart = startOfWeek(startOfMonth(day), theme.locales[theme.currentLocale].firstDayOfWeek ?? 1);
  do {
    weekIndex++;
    weeks.push(weekStart);
    weekStart = addWeeks(weekStart, 1);
  } while (weekIndex < FIXED_WEEK_COUNT);

  return (
    <div onMouseLeave={handleMouseLeave}>
      {weeks.map((week) => (
        <Week
          key={week.valueOf()}
          day={week}
          month={day.getMonth()}
          startDate={startDate}
          endDate={endDate}
          selected={selected}
          activeDate={activeDate}
          range={range}
          validator={validator}
          filterDate={filterDate}
          onMouseEnter={handleMouseEnter}
          onClick={handleDayClick}
          highlightSpecialDay={highlightSpecialDay}
        />
      ))}
    </div>
  );
};
