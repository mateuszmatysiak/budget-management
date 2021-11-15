/** @jsxRuntime classic */
/** @jsx jsx */
import { useAuth0 } from "@auth0/auth0-react";
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { useDialogHandler } from "../hooks/useDialogHandler";
import { CloseIcon } from "../icons/close";
import { LogoutIcon } from "../icons/logout";
import { UserButton } from "./Button";
import { ButtonIcon } from "./ButtonIcon";
import { Dialog, DialogContent, DialogHeader } from "./Dialog";
import { Navigation } from "./Navigation";

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 17.5%;
  border-right: ${({ theme }) => `1px solid ${theme.borderColor.primary}`};
  background-color: ${({ theme }) => theme.backgroundColor.secondary};
  font-size: 14px;
`;

const StyledAppTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 8px 32px 8px;
  height: 50px;
  padding: 0 12px;
  margin-bottom: 16px;

  > a {
    font-weight: 500;
    color: ${({ theme }) => theme.color.primary};
    letter-spacing: 0.3px;
    text-decoration: none;
    padding: 12px;
    border-radius: ${({ theme }) => theme.borderRadius.primary};
    width: 100%;
  }
`;

const StyledUserPanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: ${({ theme }) => `1px solid ${theme.borderColor.primary}`};
  height: 50px;
  color: ${({ theme }) => theme.color.primary};
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0.3px;
  padding: 0 22px;
`;

const StyledDialogContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  :not(:last-of-type) {
    border-bottom: ${({ theme }) => `1px solid ${theme.borderColor.secondary}`};
  }
`;

const Sidebar = () => {
  const { logout, user } = useAuth0();

  const { isOpen, close, open } = useDialogHandler();

  return (
    <StyledSidebar>
      <StyledAppTitle>
        <NavLink to="/kalendarz">Twój budżet domowy</NavLink>
      </StyledAppTitle>

      <Navigation />

      <StyledUserPanel>
        <UserButton onClick={open}>{user?.nickname}</UserButton>
        <Dialog
          ariaLabel="Dialog przedstawiający informacje o zalogowanym użytkowniku"
          isOpen={isOpen}
          onDismiss={close}
        >
          <DialogHeader>
            <span>Moje konto</span>
            <ButtonIcon
              onClick={close}
              css={css`
                padding: 8px;
              `}
            >
              <CloseIcon />
            </ButtonIcon>
          </DialogHeader>
          <DialogContent>
            <StyledDialogContentWrapper>
              <span>Nazwa</span>
              <span>{user?.nickname}</span>
            </StyledDialogContentWrapper>
            <StyledDialogContentWrapper>
              <span>E-mail</span>
              <span>{user?.email}</span>
            </StyledDialogContentWrapper>
            <StyledDialogContentWrapper>
              <span>Data utworzenia</span>
              <span>
                {user?.updated_at
                  ? new Date(user?.updated_at).toLocaleString()
                  : "-"}
              </span>
            </StyledDialogContentWrapper>
          </DialogContent>
        </Dialog>

        <ButtonIcon
          css={css`
            padding: 8px;
            margin-left: 16px;
          `}
          onClick={() =>
            logout({
              returnTo: window.location.origin,
            })
          }
        >
          <LogoutIcon />
        </ButtonIcon>
      </StyledUserPanel>
    </StyledSidebar>
  );
};

export { Sidebar };
