import styled from "@emotion/styled";
import React from "react";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundColor.primary};

  > span {
    color: ${({ theme }) => theme.color.primary};
    letter-spacing: 1px;
  }
`;

const StyledTextPrimary = styled.span`
  font-size: 64px;
  font-weight: 700;
  margin-bottom: 24px;
`;

const StyledTextSecondary = styled.span`
  font-size: 24px;
  font-weight: 300;
`;

const NotFoundScreen = () => {
  return (
    <StyledWrapper>
      <StyledTextPrimary>404</StyledTextPrimary>
      <StyledTextSecondary>Nie znaleziono strony</StyledTextSecondary>
    </StyledWrapper>
  );
};

export { NotFoundScreen };
