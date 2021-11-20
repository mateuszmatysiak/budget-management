/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundColor.primary};
  background-image: radial-gradient(rgba(38, 38, 38, 0.75) 1px, transparent 0);
  background-size: 16px 16px;

  > span {
    color: ${({ theme }) => theme.color.primary};
    letter-spacing: 1px;
  }
`;

const StyledTextPrimary = styled.p`
  font-size: 32px;
  margin-bottom: 16px;
`;

const StyledTextSecondary = styled.pre`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 24px;
`;

interface ErrorProps {
  error: Error;
}

const ErrorMessage = ({ error }: ErrorProps) => {
  return (
    <div
      role="alert"
      css={css`
        width: 100%;
        height: 100%;
      `}
    >
      <span>Wystąpił błąd</span>
      <pre>{error?.message}</pre>
    </div>
  );
};

const FullPageError = ({ error }: ErrorProps) => {
  const errorMessage = error.message ?? "Wystąpił błąd";

  return (
    <StyledMain>
      <StyledTextPrimary>
        Wystąpił błąd. Spróbuj odświeżyć aplikację.
      </StyledTextPrimary>
      {error?.message ? (
        <StyledTextSecondary>{errorMessage}</StyledTextSecondary>
      ) : null}
    </StyledMain>
  );
};

export { FullPageError, ErrorMessage };
