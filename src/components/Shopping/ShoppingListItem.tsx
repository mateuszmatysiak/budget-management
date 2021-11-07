/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { NavLink } from "../Link/NavLink";

interface ShoppingListItemProps {
  id: string;
  name: string;
  date: string;
}

const ShoppingListItem = ({ name, date, id }: ShoppingListItemProps) => {
  return (
    <li>
      <NavLink to={`/zakupy/${id}`}>
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
            {date}
          </span>
        </div>
      </NavLink>
    </li>
  );
};

export { ShoppingListItem };
