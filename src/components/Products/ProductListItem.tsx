/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React, { ReactNode } from "react";
import { Checkbox } from "../Input/Input";
import { NavLink } from "../Link/NavLink";

interface ProductItemProps {
  icon: ReactNode;
  name: string;
  cost: string;
}

interface ProductListItemProps extends ProductItemProps {
  to: string;
}

const ProductItem = ({ icon, name, cost }: ProductItemProps) => {
  return (
    <React.Fragment>
      <div
        css={css`
          background-image: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);
          padding: 10px;
          border-radius: 12px;
          margin-right: 8px;
        `}
      >
        {icon}
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
          {cost} zł
        </span>
      </div>
    </React.Fragment>
  );
};

const ProductCheckboxItem = (props: ProductItemProps) => {
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

const ProductListItem = ({ to, ...props }: ProductListItemProps) => {
  return (
    <li>
      <NavLink to={to}>
        <ProductItem {...props} />
      </NavLink>
    </li>
  );
};

export { ProductListItem, ProductItem, ProductCheckboxItem };
