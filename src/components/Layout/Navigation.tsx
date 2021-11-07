/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { useAuth } from "../../context/auth-provider";
import { CalendarIcon } from "../../icons/calendar";
import { ChartIcon } from "../../icons/chart";
import { LogoutIcon } from "../../icons/logout";
import { ProductIcon } from "../../icons/product";
import { ShoppingIcon } from "../../icons/shopping";
import { ButtonIcon } from "../Button/ButtonIcon";
import { NavLink } from "../Link/NavLink";

const StyledNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  width: 17.5%;
  border-right: 1px solid rgba(38, 38, 38, 1);
  background-color: #171717;
  font-size: 14px;
`;

const StyledNavigationTitle = styled.div`
  display: flex;
  align-items: center;
  color: #e5e5e5;
  padding: 24px 8px 32px 8px;
  font-weight: 500;
  height: 50px;
  padding: 0 22px;
  letter-spacing: 0.3px;
  margin-bottom: 16px;
`;

const StyledNavigationAccount = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-top: 1px solid rgba(38, 38, 38, 1);
  height: 50px;
  color: #e5e5e5;
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

const Navigation = () => {
  const { logout, user } = useAuth();
  return (
    <StyledNavigation aria-label="Główna nawigacja">
      <StyledNavigationTitle>Budżet domowy</StyledNavigationTitle>
      <ul
        css={css`
          flex: 1 1;
          padding: 0 14px;
        `}
      >
        <li>
          <NavLink to="/kalendarz">
            <CalendarIcon />
            Kalendarz
          </NavLink>
        </li>
        <li>
          <NavLink to="/statystyki">
            <ChartIcon />
            Statystyki
          </NavLink>
        </li>
        <li>
          <NavLink to="/zakupy">
            <ShoppingIcon />
            Zakupy
          </NavLink>
        </li>
        <li>
          <NavLink to="/produkty">
            <ProductIcon />
            Produkty
          </NavLink>
        </li>

        <li
          css={css`
            padding: 24px 0;
            color: rgba(255, 255, 255, 0.4);
            font-size: 12px;
            letter-spacing: 0.5px;
          `}
        >
          Produkty
        </li>

        <li>
          <NavLink to="/produkty/kotlet-schabowy">
            <ProductIcon />
            Kotlet schabowy
          </NavLink>
        </li>
        <li>
          <NavLink to="/produkty/jajka">
            <ProductIcon />
            Jajka
          </NavLink>
        </li>

        <li
          css={css`
            padding: 24px 0 16px 0;
            color: rgba(255, 255, 255, 0.4);
            font-size: 12px;
            letter-spacing: 0.5px;
          `}
        >
          Zakupy
        </li>

        <li>
          <NavLink to="/zakupy/1">
            <ShoppingIcon />
            Zakupy na święta
          </NavLink>
        </li>
        <li>
          <NavLink to="/zakupy/2">
            <ShoppingIcon />
            Zakupy elektroniczne
          </NavLink>
        </li>
      </ul>

      <StyledNavigationAccount>
        <span>{user?.username}</span>
        <ButtonIcon onClick={logout}>
          <LogoutIcon />
        </ButtonIcon>
      </StyledNavigationAccount>
    </StyledNavigation>
  );
};

export { Navigation };
