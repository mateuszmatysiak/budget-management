/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import styled from "@emotion/styled";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding: 16px;
  text-align: center;
  background-color: ${({ theme }) => theme.backgroundColor.primary};
  background-image: radial-gradient(rgba(38, 38, 38, 0.75) 1px, transparent 0);
  background-size: 16px 16px;
`;

const StyledTextPrimary = styled.p`
  font-size: 32px;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.color.primary};
  letter-spacing: 1px;
`;

const StyledTextSecondary = styled.p`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.color.primary};
  letter-spacing: 1px;
`;

interface ErrorProps {
  error?: Error | string;
}

const FullPageError = ({ error }: ErrorProps) => {
  const errorMessage = typeof error === "string" ? error : error?.message;
  return (
    <StyledMain role="alert">
      <StyledTextPrimary>Wystąpił błąd</StyledTextPrimary>
      <StyledTextSecondary>
        {errorMessage ?? "Wystąpił błąd"}
      </StyledTextSecondary>
    </StyledMain>
  );
};

export { FullPageError };
