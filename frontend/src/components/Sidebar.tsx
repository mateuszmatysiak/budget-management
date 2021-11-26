/** @jsxFrag React.Fragment */
/** @jsxRuntime classic */
/** @jsx jsx */
import { useAuth0 } from "@auth0/auth0-react";
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDialogHandler } from "../hooks/useDialogHandler";
import { useMedia } from "../hooks/useMedia";
import { ArrowBack } from "../icons/arrowBack";
import { CloseIcon } from "../icons/close";
import { LogoutIcon } from "../icons/logout";
import { MenuIcon } from "../icons/menu";
import * as mq from "../styles/media-query";
import { UserButton } from "./Button";
import { ButtonIcon } from "./ButtonIcon";
import { Dialog, DialogContent, DialogHeader } from "./Dialog";
import { Navigation } from "./Navigation";

const StyledSidebar = styled.div<{ showMenu: boolean }>`
  display: flex;
  flex-direction: column;
  width: 17.5%;
  min-width: 315px;
  height: 100vh;
  border-right: ${({ theme }) => `1px solid ${theme.borderColor.primary}`};
  background-color: ${({ theme }) => theme.backgroundColor.secondary};
  font-size: 14px;
  transition: left 0.25s;
  z-index: 2;

  ${mq.laptop} {
    position: absolute;
    top: 0;
    left: ${({ showMenu }) => (showMenu ? 0 : "-100%")};
    min-height: 100vh;
    z-index: 2;
  }

  ${mq.mobile} {
    width: 100%;
  }
`;

const StyledAppTitle = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 12px;
  margin-bottom: 16px;

  > a {
    font-weight: 500;
    color: ${({ theme }) => theme.color.primary};
    letter-spacing: 0.3px;
    text-decoration: none;
    padding: 12px 8px;
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

const StyledHeader = styled.header`
  position: fixed;
  padding: 8px 12px;
  min-height: 48px;
  width: 100%;
  background-color: rgba(23, 23, 23, 0.85);
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px;
  backdrop-filter: saturate(180%) blur(20px);
  border-bottom: ${({ theme }) => `1px solid ${theme.borderColor.primary}`};
  z-index: 2;
`;

const Sidebar = () => {
  const { logout, user } = useAuth0();
  const { laptop, mobile } = useMedia();
  const { pathname, key } = useLocation();
  const navigate = useNavigate();

  const { isOpen, close, open } = useDialogHandler();

  const [showMenu, setShowMenu] = React.useState(false);

  const splittedPathname = pathname.split("/");
  const isParamExist = splittedPathname.length === 3;
  const lastPathname = splittedPathname[1];

  const toggle = () => {
    if (isParamExist && mobile) {
      navigate(lastPathname);
    } else {
      setShowMenu(!showMenu);
      window.scrollTo(0, 0);
    }
  };

  React.useEffect(() => {
    if (laptop) setShowMenu(false);
  }, [key]);

  return (
    <>
      {laptop ? (
        <StyledHeader>
          <ButtonIcon onClick={toggle}>
            {isParamExist && mobile ? (
              <ArrowBack width="16px" height="16px" />
            ) : showMenu ? (
              <CloseIcon />
            ) : (
              <MenuIcon />
            )}
          </ButtonIcon>
        </StyledHeader>
      ) : null}

      <StyledSidebar showMenu={showMenu}>
        <StyledAppTitle>
          {laptop ? (
            <ButtonIcon onClick={() => setShowMenu(!showMenu)}>
              <CloseIcon />
            </ButtonIcon>
          ) : null}
          <NavLink to="/kalendarz">Twój budżet domowy</NavLink>
        </StyledAppTitle>

        <Navigation />

        <StyledUserPanel>
          <UserButton onClick={open}>{user?.nickname}</UserButton>
          <Dialog
            ariaLabel="Dialog przedstawiający informacje o zalogowanym użytkowniku"
            isOpen={isOpen}
            onDismiss={close}
            width="500px"
          >
            <DialogHeader>
              <span>Moje konto</span>
              <ButtonIcon onClick={close}>
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
            </DialogContent>
          </Dialog>

          <ButtonIcon
            css={css`
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
    </>
  );
};

export { Sidebar };
