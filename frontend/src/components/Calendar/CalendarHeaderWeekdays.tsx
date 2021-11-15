/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import styled from "@emotion/styled";

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
      <StyledWeekDay>Poniedziałek</StyledWeekDay>
      <StyledWeekDay>Wtorek</StyledWeekDay>
      <StyledWeekDay>Środa</StyledWeekDay>
      <StyledWeekDay>Czwartek</StyledWeekDay>
      <StyledWeekDay>Piątek</StyledWeekDay>
      <StyledWeekDay>Sobota</StyledWeekDay>
      <StyledWeekDay>Niedziela</StyledWeekDay>
    </StyledContainer>
  );
};

export { CalendarHeaderWeekdays };
