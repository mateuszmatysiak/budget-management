/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { weekdays } from "../../utils/chart";

const StyledContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 32px;
`;

const StyledWeekDay = styled.div`
  color: ${({ theme }) => theme.color.tertiary};
  font-weight: 300;
  font-size: 14px;
`;

const CalendarHeaderWeekdays = () => {
  return (
    <StyledContainer>
      {weekdays.map((day) => (
        <StyledWeekDay key={day}>{day}</StyledWeekDay>
      ))}
    </StyledContainer>
  );
};

export { CalendarHeaderWeekdays };
