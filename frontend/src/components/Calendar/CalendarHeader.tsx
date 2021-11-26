/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { ArrowLeft } from "../../icons/arrowLeft";
import { ArrowRight } from "../../icons/arrowRight";
import { ButtonIcon } from "../ButtonIcon";
import * as mq from "../../styles/media-query";

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;

  ${mq.mobile} {
    margin-bottom: 16px;
  }
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
          `}
        >
          <ArrowLeft />
        </ButtonIcon>
        <ButtonIcon onClick={onNext}>
          <ArrowRight />
        </ButtonIcon>
      </StyledButtonWrapper>
    </StyledContainer>
  );
};

export { CalendarHeader };
