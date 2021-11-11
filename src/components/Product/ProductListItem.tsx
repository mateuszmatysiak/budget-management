/** @jsxFrag React.Fragment */
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import { ProductData } from "../../types/product";
import { Checkbox } from "../Input";
import { NavLink } from "../NavLink";
import { getProductColor, getProductIcon } from "./utils";

const ProductItem = ({ category, name, price }: ProductData) => {
  return (
    <>
      <div
        css={css`
          background-image: ${getProductColor(category)};
          padding: 10px;
          border-radius: 12px;
          margin-right: 8px;
        `}
      >
        {getProductIcon(category)}
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 40px;
        `}
      >
        <span
          css={css`
            color: #e5e5e5;
            letter-spacing: 0.3px;
            font-size: 14px;
          `}
        >
          {name}
        </span>
        <span
          css={css`
            color: rgba(255, 255, 255, 0.4);
            font-weight: 300;
            font-size: 14px;
          `}
        >
          {price} zł
        </span>
      </div>
    </>
  );
};

const ProductCheckboxItem = (props: ProductData) => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px;
      `}
    >
      <div
        css={css`
          display: flex;
        `}
      >
        <ProductItem {...props} />
      </div>

      <Checkbox />
    </div>
  );
};

const ProductListItem = (props: ProductData) => {
  return (
    <li>
      <NavLink to={`/produkty/${props.id}`}>
        <ProductItem {...props} />
      </NavLink>
    </li>
  );
};

export { ProductListItem, ProductItem, ProductCheckboxItem };
