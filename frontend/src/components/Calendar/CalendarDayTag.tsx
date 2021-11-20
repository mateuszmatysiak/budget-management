import styled from "@emotion/styled";
import React from "react";
import { ShoppingIcon } from "../../icons/shopping";
import { IShopping } from "../../types/shopping";

const StyledDayTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 8px;
  padding: 8px;
  border: ${({ theme }) => `1px solid ${theme.borderColor.secondary}`};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  background-color: ${({ theme }) => theme.backgroundColor.quatenary};

  > div {
    display: flex;
    align-items: center;
  }
`;

const StyledDayText = styled.span`
  margin-left: 8px;
  font-size: 14px;
  font-weight: 300;
  color: ${({ theme }) => theme.color.primary};
`;

interface CalendarDayTagProps {
  events: IShopping[];
}

const CalendarDayTag = ({ events }: CalendarDayTagProps) => {
  return (
    <StyledDayTag>
      <div>
        <ShoppingIcon />
        <StyledDayText>Zakupy</StyledDayText>
      </div>

      <span>{events.length}</span>
    </StyledDayTag>
  );
};

export { CalendarDayTag };
