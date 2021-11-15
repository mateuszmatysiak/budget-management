/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { ArrowLeft } from "../../icons/arrowLeft";
import { ArrowRight } from "../../icons/arrowRight";
import { ButtonIcon } from "../ButtonIcon";

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

interface CalendarHeaderProps {
  onNext: () => void;
  onBack: () => void;
  dateDisplay: string;
}

const CalendarHeader = ({
  dateDisplay,
  onNext,
  onBack,
}: CalendarHeaderProps) => {
  return (
    <StyledContainer>
      <div
        css={css`
          text-transform: capitalize;
        `}
      >
        {dateDisplay}
      </div>
      <StyledButtonWrapper>
        <ButtonIcon
          onClick={onBack}
          css={css`
            margin-right: 16px;
            padding: 8px;
          `}
        >
          <ArrowLeft />
        </ButtonIcon>
        <ButtonIcon
          onClick={onNext}
          css={css`
            padding: 8px;
          `}
        >
          <ArrowRight />
        </ButtonIcon>
      </StyledButtonWrapper>
    </StyledContainer>
  );
};

export { CalendarHeader };
