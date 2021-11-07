/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import { Button } from "./components/Button/Button";
import { Input } from "./components/Input/Input";
import { useAuth } from "./context/auth-provider";

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

const StyledForm = styled.form`
  width: 400px;
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

const StyledSubTextWrapper = styled.div`
  text-align: right;
  margin-bottom: 16px;
`;

const StyledSubTextButton = styled.button`
  font-size: 12px;
  border: unset;
  background-color: unset;
  color: ${({ theme }) => theme.color.tertiary};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.primary};

  &:hover {
    color: ${({ theme }) => theme.color.secondary};
  }
`;

const UnauthenticatedApp = () => {
  const [state, setState] = useState("login");
  const { login, register } = useAuth();

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      username: { value: string };
      password: { value: string };
    };

    const func = state === "login" ? login : register;

    func?.({
      username: target.username.value,
      password: target.password.value,
    });
  };

  return (
    <StyledMain>
      <StyledForm onSubmit={handleSubmit}>
        <StyledHeader>
          {state === "login" ? "Logowanie" : "Rejestracja"}
        </StyledHeader>
        <StyledContent>
          <Input
            name="username"
            placeholder="Nazwa użytkownika"
            required
            autoFocus
            css={css`
              margin-bottom: 16px;
            `}
          />
          <Input
            name="password"
            type="password"
            placeholder="Hasło użytkownika"
            required
            css={css`
              margin-bottom: 4px;
            `}
          />
          <StyledSubTextWrapper>
            <StyledSubTextButton
              type="button"
              onClick={() => setState(state === "login" ? "register" : "login")}
            >
              {state === "login" ? "Utwórz konto" : "Zaloguj się"}
            </StyledSubTextButton>
          </StyledSubTextWrapper>
          <Button type="submit">
            {state === "login" ? "Zaloguj się" : "Zarejestruj się"}
          </Button>
        </StyledContent>
      </StyledForm>
    </StyledMain>
  );
};

export default UnauthenticatedApp;
