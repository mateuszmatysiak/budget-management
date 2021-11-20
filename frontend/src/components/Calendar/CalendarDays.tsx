/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Theme } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { IDay } from "../../types/day";
import { CalendarDayTag } from "./CalendarDayTag";

const getBackgroundColorDay = ({
  theme,
  isCurrentDay,
}: StyledDayProps & { theme: Theme }) => {
  if (isCurrentDay) return theme.color.secondary;
  else return theme.backgroundColor.secondary;
};

interface StyledDayProps {
  isCurrentDay: boolean;
}

interface CalendarDayProps {
  day: IDay;
  openCalendarDay: (calendarDayId: number) => void;
}
interface CalendarDaysProps {
  days: IDay[];
  openCalendarDay: (calendarDayId: number) => void;
}

const StyledDays = styled.div<{ rows: number }>`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: ${({ rows }) => `repeat(${rows}, 1fr);`};
  gap: 8px;
  height: 100%;
`;

const StyledDay = styled.button<StyledDayProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${(props) => getBackgroundColorDay(props)};
  border: ${({ theme }) => `1px solid ${theme.borderColor.secondary}`};
  padding: 10px;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  cursor: pointer;
  color: ${({ theme }) => theme.color.primary};
  box-shadow: ${({ theme }) => theme.color.primary};

  &:hover {
    border: ${({ theme }) => `1px solid ${theme.color.secondary}`};
  }
`;

const Day = ({ day, openCalendarDay }: CalendarDayProps) => {
  return (
    <StyledDay
      isCurrentDay={day.isCurrentDay}
      onClick={() => openCalendarDay(day.value as number)}
    >
      {day.value}
      {day.events.length ? <CalendarDayTag events={day.events} /> : null}
    </StyledDay>
  );
};

const CalendarDays = ({ days = [], openCalendarDay }: CalendarDaysProps) => {
  const rows = days.length > 35 ? 6 : 5;

  return (
    <StyledDays rows={rows}>
      {days.map((day: IDay, index: number) => {
        return (
          <React.Fragment key={index}>
            {day.value !== "empty" ? (
              <Day day={day} openCalendarDay={openCalendarDay} />
            ) : (
              <div />
            )}
          </React.Fragment>
        );
      })}
    </StyledDays>
  );
};

export { CalendarDays };
