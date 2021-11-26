/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { CalendarDays } from "../components/Calendar/CalendarDays";
import { CalendarEventDialog } from "../components/Calendar/CalendarEventDialog";
import { CalendarHeader } from "../components/Calendar/CalendarHeader";
import { CalendarHeaderWeekdays } from "../components/Calendar/CalendarHeaderWeekdays";
import {
  formatShoppingData,
  getEventsForDay,
} from "../components/Calendar/utils";
import { FullPageError } from "../components/Error";
import { StyledCalendarLoader, StyledSpinner } from "../components/Loader";
import { useApi } from "../hooks/useApi";
import { useCalendarDate } from "../hooks/useCalendarDate";
import { useMedia } from "../hooks/useMedia";
import * as mq from "../styles/media-query";
import { IShopping } from "../types/shopping";

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: scroll;
  color: ${({ theme }) => theme.color.primary};
  padding: 36px 96px;

  ${mq.laptop} {
    padding: 82px 36px 36px 36px;
  }

  ${mq.mobile} {
    padding: 64px 12px 12px 12px;
  }
`;

const CalendarView = () => {
  const { mobile } = useMedia();

  const [navId, setNavId] = React.useState(0);
  const [calendarDayId, setCalendarDayId] = React.useState<number | null>(null);

  const { data: shopping, error } = useApi<IShopping[]>("shopping");

  const isLoading = !shopping;

  const { days, dateDisplay } = useCalendarDate(navId);

  const daysWithEvents = days?.map((day) => ({
    ...day,
    events: getEventsForDay(formatShoppingData(shopping), day),
  }));

  if (error) return <FullPageError error={error} />;

  return (
    <StyledWrapper>
      <CalendarHeader
        dateDisplay={dateDisplay}
        onNext={() => setNavId(navId + 1)}
        onBack={() => setNavId(navId - 1)}
      />
      {!mobile ? <CalendarHeaderWeekdays /> : null}

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
