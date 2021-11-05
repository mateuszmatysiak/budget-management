/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { NavLink } from "../Link/NavLink";

interface ShoppingListItemProps {
  name: string;
  date: string;
  to: string;
}

const ShoppingListItem = ({ name, date, to }: ShoppingListItemProps) => {
  return (
    <li>
      <NavLink to={to}>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          `}
        >
          <span
            css={css`
              line-height: 1.5;
              margin-bottom: 8px;
            `}
          >
            {name}
          </span>
          <span
            css={css`
              color: rgba(255, 255, 255, 0.4);
            `}
          >
            {date}
          </span>
        </div>
      </NavLink>
    </li>
  );
};

export { ShoppingListItem };
