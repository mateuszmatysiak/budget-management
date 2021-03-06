/** @jsxFrag React.Fragment */
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import { IProduct } from "../../types/product";
import { round } from "../../utils/number";
import { NavLink } from "../NavLink";
import { getProductColor, getProductIcon } from "./utils";

const calendarListStyles = `
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

interface ProductItemProps {
  product: IProduct;
  isCalendarList?: boolean;
}

const ProductItem = ({ product, isCalendarList }: ProductItemProps) => {
  return (
    <>
      <div
        css={css`
          display: flex;
          background-image: ${getProductColor(product?.category)};
          padding: 10px;
          border-radius: 12px;
          margin-right: 8px;
        `}
      >
        {getProductIcon(product.category)}
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 40px;
          ${isCalendarList ? calendarListStyles : {}}
        `}
      >
        <span
          css={css`
            color: #e5e5e5;
            letter-spacing: 0.3px;
            font-size: 14px;
          `}
        >
          {product.name}
        </span>
        <span
          css={css`
            color: rgba(255, 255, 255, 0.4);
            font-weight: 300;
            font-size: 14px;
          `}
        >
          {round(product.price)} zł
        </span>
      </div>
    </>
  );
};

const ProductListItem = (product: IProduct) => {
  return (
    <li>
      <NavLink to={`/produkty/${product.id}`}>
        <ProductItem product={product} />
      </NavLink>
    </li>
  );
};

export { ProductListItem, ProductItem };
