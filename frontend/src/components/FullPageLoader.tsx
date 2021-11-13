/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.backgroundColor.primary};
  background-image: radial-gradient(rgba(38, 38, 38, 0.75) 1px, transparent 0);
  background-size: 16px 16px;
`;

const StyledSpinner = styled.span`
  display: inline-block;
  border: ${({ theme }) => `4px solid ${theme.color.white}`};
  border-radius: 50%;
  border-top: ${({ theme }) => `4px solid ${theme.color.secondary}`};
  width: 40px;
  height: 40px;
  -webkit-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const StyledLoaderWrapper = styled.div`
  text-align: center;
`;

const Loader = ({ width, height }: { width?: string; height?: string }) => {
  return (
    <StyledLoaderWrapper>
      <StyledSpinner
        css={css`
          width: ${width};
          height: ${height};
        `}
      />
    </StyledLoaderWrapper>
  );
};

const FullPageLoader = () => {
  return (
    <StyledMain>
      <StyledSpinner />
    </StyledMain>
  );
};

export { FullPageLoader, Loader };
