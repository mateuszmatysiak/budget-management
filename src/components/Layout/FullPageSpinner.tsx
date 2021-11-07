import styled from "@emotion/styled";
import React from "react";
import { SpinnerIcon } from "../../icons/spinner";

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.backgroundColor.primary};
`;

const FullPageSpinner = () => {
  return (
    <StyledMain>
      <SpinnerIcon width="50px" height="50px" />
    </StyledMain>
  );
};

export { FullPageSpinner };
