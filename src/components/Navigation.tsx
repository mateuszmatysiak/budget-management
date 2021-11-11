/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { CalendarIcon } from "../icons/calendar";
import { ChartIcon } from "../icons/chart";
import { ProductIcon } from "../icons/product";
import { ShoppingIcon } from "../icons/shopping";
import { NavLink } from "./NavLink";

const StyledNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 1 1;
`;

const Navigation = () => {
  return (
    <StyledNavigation aria-label="Główna nawigacja">
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
          <NavLink withoutHighliting to="/produkty/1">
            <ProductIcon />
            Kotlet schabowy
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
          <NavLink withoutHighliting to="/zakupy/1">
            <ShoppingIcon />
            Zakupy na święta
          </NavLink>
        </li>
        <li>
          <NavLink withoutHighliting to="/zakupy/2">
            <ShoppingIcon />
            Zakupy elektroniczne
          </NavLink>
        </li>
      </ul>
    </StyledNavigation>
  );
};

export { Navigation };
