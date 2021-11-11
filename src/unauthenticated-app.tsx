/** @jsxRuntime classic */
/** @jsx jsx */
import { useAuth0 } from "@auth0/auth0-react";
import { jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { Button } from "./components/Button/Button";

const StyledMain = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundColor.primary};
  background-image: radial-gradient(rgba(38, 38, 38, 0.75) 1px, transparent 0);
  background-size: 16px 16px;
  color: ${({ theme }) => theme.color.tertiary};
`;

const StyledWrapper = styled.div`
  width: 450px;
  border: ${({ theme }) => `1px solid ${theme.borderColor.primary}`};
  background-color: ${({ theme }) => theme.backgroundColor.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
`;

const StyledHeader = styled.header`
  padding: 12px 16px;
  border-bottom: ${({ theme }) => `1px solid ${theme.borderColor.secondary}`};
  font-size: 16px;
  font-weight: 300;
  padding: 16px;
  text-align: center;
  letter-spacing: 1px;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  letter-spacing: 0.5px;
  font-size: 14px;
  line-height: 1.75;
`;

const UnauthenticatedApp = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <StyledMain>
      <StyledWrapper>
        <StyledHeader>Aplikacja do zarządzania budżetem domowym</StyledHeader>
        <StyledContent>
          <Button onClick={() => loginWithRedirect()}>
            Przejdź do panelu logowania
          </Button>
        </StyledContent>
      </StyledWrapper>
    </StyledMain>
  );
};

export default UnauthenticatedApp;
