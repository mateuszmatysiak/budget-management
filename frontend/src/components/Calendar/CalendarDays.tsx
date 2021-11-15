/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { IDay } from "../../types/day";
import { CalendarDayTag } from "./CalendarDayTag";

const getBackgroundColorDay = ({
  theme,
  isEmptyDay,
  isCurrentDay,
}: StyledDayProps & { theme: Theme }) => {
  if (isEmptyDay) return "";
  else if (isCurrentDay) return theme.color.secondary;
  else return theme.backgroundColor.secondary;
};

interface StyledDayProps {
  isEmptyDay: boolean;
  isCurrentDay: boolean;
}

const StyledDays = styled.div<{ rows: number }>`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: ${({ rows }) => `repeat(${rows}, 1fr);`};
  gap: 8px;
  height: 100%;
`;

const StyledDay = styled.div<StyledDayProps>`
  background-color: ${(props) => getBackgroundColorDay(props)};
  border: ${({ theme, isEmptyDay }) =>
    isEmptyDay ? "" : `1px solid ${theme.borderColor.secondary}`};
  padding: 10px;
  cursor: ${({ isEmptyDay }) => (isEmptyDay ? "default" : "pointer")};
  transition: border 0.4s;
  border-radius: ${({ theme }) => theme.borderRadius.primary};

  &:hover {
    border: ${({ theme, isEmptyDay }) =>
      isEmptyDay ? "" : `1px solid ${theme.color.secondary}`};
  }
`;

interface CalendarDaysProps {
  days: IDay[];
  openCalendarDay: (calendarDayId: number) => void;
}

const CalendarDays = ({ days = [], openCalendarDay }: CalendarDaysProps) => {
  const rows = days.length > 35 ? 6 : 5;

  return (
    <StyledDays rows={rows}>
      {days.map((day: IDay, index: number) => (
        <StyledDay
          key={index}
          isCurrentDay={day.isCurrentDay}
          isEmptyDay={day.value === "empty"}
          onClick={() =>
            day.value !== "empty" ? openCalendarDay(day.value as number) : null
          }
        >
          {day.value === "empty" ? "" : day.value}
          {day.events.length ? <CalendarDayTag events={day.events} /> : null}
        </StyledDay>
      ))}
    </StyledDays>
  );
};

export { CalendarDays };
