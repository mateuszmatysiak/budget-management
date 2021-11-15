/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import useSWR from "swr";
import { CalendarDays } from "../components/Calendar/CalendarDays";
import { CalendarEventDialog } from "../components/Calendar/CalendarEventDialog";
import { CalendarHeader } from "../components/Calendar/CalendarHeader";
import { CalendarHeaderWeekdays } from "../components/Calendar/CalendarHeaderWeekdays";
import { useCalendarDate } from "../components/Calendar/useCalendarDate";
import {
  formatShoppingData,
  getEventsForDay,
} from "../components/Calendar/utils";
import {
  StyledCalendarLoader,
  StyledSpinner,
} from "../components/FullPageLoader";
import { IShopping } from "../types/shopping";
import { client } from "../utils/api-client";

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: scroll;
  color: ${({ theme }) => theme.color.primary};
  padding: 36px 96px;
`;

const CalendarView = () => {
  const [navId, setNavId] = React.useState(0);
  const [calendarDayId, setCalendarDayId] = React.useState<number | null>(null);

  const { data: shopping, error } = useSWR<IShopping[]>("shopping", () =>
    client("shopping")
  );

  const isLoading = !shopping && !error;

  const { days, dateDisplay } = useCalendarDate(navId);

  const daysWithEvents = days?.map((day) => ({
    ...day,
    events: getEventsForDay(formatShoppingData(shopping), day),
  }));

  return (
    <StyledWrapper>
      <CalendarHeader
        dateDisplay={dateDisplay}
        onNext={() => setNavId(navId + 1)}
        onBack={() => setNavId(navId - 1)}
      />
      <CalendarHeaderWeekdays />

      <CalendarDays days={daysWithEvents} openCalendarDay={setCalendarDayId} />

      <CalendarEventDialog
        days={daysWithEvents}
        calendarDayId={calendarDayId}
        openCalendarDay={setCalendarDayId}
      />

      {isLoading ? (
        <StyledCalendarLoader>
          <StyledSpinner />
        </StyledCalendarLoader>
      ) : null}
    </StyledWrapper>
  );
};

export default CalendarView;
