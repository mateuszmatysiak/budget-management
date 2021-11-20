/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useSearchHandler } from "../../hooks/useSearchHandler";
import { IShopping } from "../../types/shopping";
import { EmptyState } from "../EmptyState";
import { ShoppingListItem } from "./ShoppingListItem";
import { ShoppingListItemsHeader } from "./ShoppingListItemsHeader";

interface ShoppingListItemsProps {
  shopping?: IShopping[];
}

const ShoppingListItems = ({ shopping = [] }: ShoppingListItemsProps) => {
  const { searchData, handleSearch } = useSearchHandler(shopping);

  return (
    <div
      aria-label="Lista zakupów"
      css={css`
        position: relative;
        flex: 1 1;
        height: 100vh;
        border-right: 1px solid rgba(38, 38, 38, 1);
        background-color: #171717;
        font-size: 14px;
      `}
    >
      <ShoppingListItemsHeader onSearch={handleSearch} />

      <ul
        css={css`
          padding: 120px 12px 12px 12px;
          overflow-y: scroll;
          height: 100%;
        `}
      >
        {searchData.length ? (
          searchData.map((shoppingItem, index) => (
            <ShoppingListItem key={index} shoppingItem={shoppingItem} />
          ))
        ) : (
          <EmptyState>Nie znaleziono listy zakupowej</EmptyState>
        )}
      </ul>
    </div>
  );
};

export { ShoppingListItems };
