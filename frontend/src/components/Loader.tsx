/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const spin = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
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
  animation: ${spin} 1s linear infinite;
`;

const StyledLoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const StyledCalendarLoader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: hsla(0, 0%, 0%, 0.33);

  > span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Loader = ({
  width,
  height,
  borderWidth,
}: {
  width?: string;
  height?: string;
  borderWidth?: string;
}) => {
  return (
    <StyledLoaderWrapper>
      <StyledSpinner
        css={css`
          width: ${width};
          height: ${height};
          border-width: ${borderWidth};
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

export { FullPageLoader, Loader, StyledSpinner, StyledCalendarLoader };
