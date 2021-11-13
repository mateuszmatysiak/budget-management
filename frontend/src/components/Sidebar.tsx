/** @jsxRuntime classic */
/** @jsx jsx */
import { useAuth0 } from "@auth0/auth0-react";
import { jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { LogoutIcon } from "../icons/logout";
import { ButtonIcon } from "./ButtonIcon";
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
    border-radius: ${({ theme }) => theme.borderRadius.secondary};
    width: 100%;
  }
`;

const StyledUserPanel = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-top: ${({ theme }) => `1px solid ${theme.borderColor.primary}`};
  height: 50px;
  color: ${({ theme }) => theme.color.primary};
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0.3px;
  padding: 0 22px;

  > button {
    position: absolute;
    top: 50%;
    right: 5%;
    transform: translateY(-50%);
    padding: 8px;
  }
`;

const Sidebar = () => {
  const { logout, user } = useAuth0();

  return (
    <StyledSidebar>
      <StyledAppTitle>
        <NavLink to="/kalendarz">Twój budżet domowy</NavLink>
      </StyledAppTitle>

      <Navigation />

      <StyledUserPanel>
        <span>{user?.nickname ?? ""}</span>
        <ButtonIcon
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
