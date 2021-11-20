/** @jsxFrag React.Fragment */
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import { useApi } from "../hooks/useApi";
import { CalendarIcon } from "../icons/calendar";
import { ChartIcon } from "../icons/chart";
import { ProductIcon } from "../icons/product";
import { ShoppingIcon } from "../icons/shopping";
import { ILast } from "../types/last";
import { IProduct } from "../types/product";
import { IShopping } from "../types/shopping";
import { Loader } from "./Loader";
import { NavLink } from "./NavLink";

const Navigation = () => {
  const { data: last, error } = useApi<ILast>("last");

  const isLoading = !last;

  return (
    <nav
      aria-label="Główna nawigacja"
      css={css`
        display: flex;
        flex-direction: column;
        flex: 1 1;
      `}
    >
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

        {!error ? (
          !isLoading ? (
            <>
              {last.products.length ? (
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
              ) : null}

              {last.products?.map((product: IProduct) => (
                <li key={product.id}>
                  <NavLink withoutHighliting to={`/produkty/${product.id}`}>
                    <ProductIcon />
                    {product.name}
                  </NavLink>
                </li>
              ))}

              {last.shopping.length ? (
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
              ) : null}

              {last.shopping.map((shoppingItem: IShopping) => (
                <li key={shoppingItem.id}>
                  <NavLink withoutHighliting to={`/zakupy/${shoppingItem.id}`}>
                    <ShoppingIcon />
                    {shoppingItem.name}
                  </NavLink>
                </li>
              ))}
            </>
          ) : (
            <div
              css={css`
                padding: 32px 16px;
              `}
            >
              <Loader />
            </div>
          )
        ) : null}
      </ul>
    </nav>
  );
};

export { Navigation };
