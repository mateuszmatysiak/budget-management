/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { CalendarIcon } from "../../icons/calendar";
import { ChartIcon } from "../../icons/chart";
import { ProductIcon } from "../../icons/product";
import { ShoppingIcon } from "../../icons/shopping";
import { NavLink } from "../Link/NavLink";

const StyledNavigation = styled.nav`
  width: 17.5%;
  border-right: 1px solid rgba(38, 38, 38, 1);
  background-color: #171717;
  padding: 0 12px;
  font-size: 14px;
`;

const StyledNavigationTitle = styled.p`
  color: #e5e5e5;
  padding: 24px 8px 32px 8px;
  font-weight: 700;
`;

const Navigation = () => {
  return (
    <StyledNavigation aria-label="Główna nawigacja">
      <StyledNavigationTitle>TWÓJ BUDŻET DOMOWY</StyledNavigationTitle>
      <ul>
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
            padding: 24px 0 16px 0;
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
          <NavLink to="/zakupy/23131321">
            <ShoppingIcon />
            Zakupy na święta
          </NavLink>
        </li>
        <li>
          <NavLink to="/zakupy/3213213">
            <ShoppingIcon />
            Zakupy elektroniczne
          </NavLink>
        </li>
      </ul>
    </StyledNavigation>
  );
};

export { Navigation };
