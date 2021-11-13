/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import styled from "@emotion/styled";

const StyledWrapper = styled.div`
  width: 100%;
  color: rgba(245, 245, 245, 1);
  padding: 72px 96px;
`;

const StyledCalendar = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor.secondary};
  width: 100%;
  height: 100%;
  border: 1px solid rgba(229, 229, 229, 0.2);
  border-radius: 10px;
`;

const CalendarView = () => {
  return (
    <StyledWrapper>
      <StyledCalendar></StyledCalendar>
    </StyledWrapper>
  );
};

export default CalendarView;
