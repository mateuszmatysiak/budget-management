/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { ReactNode } from "react";
import { useDialogHandler } from "../../hooks/useDialogHandler";
import { AddIcon } from "../../icons/add";
import { SearchIcon } from "../../icons/search";
import { ButtonIcon } from "../Button/ButtonIcon";
import { InsertDialog } from "../Dialog/InsertDialog";
import { Input } from "../Input/Input";

export type ItemType = "PRODUCT" | "SHOPPING";

interface ItemListProps {
  children?: ReactNode;
  itemType: ItemType;
  onSearch: (value: string) => void;
}

const ItemListHeader = ({ itemType, onSearch }: ItemListProps) => {
  const { isOpen, open, close } = useDialogHandler();

  return (
    <div
      css={css`
        position: absolute;
        width: 100%;
        background-color: rgba(23, 23, 23, 0.85);
        box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px;
        backdrop-filter: saturate(180%) blur(20px);
      `}
    >
      <Input
        type="search"
        name="search"
        placeholder={`Wyszukaj ${
          itemType === "PRODUCT" ? "produkt" : "zakupy"
        }`}
        onChange={(event) => onSearch(event.target.value)}
        icon={<SearchIcon />}
      />
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 12px;
          border-top: 1px solid rgba(38, 38, 38, 1);
          border-bottom: 1px solid rgba(38, 38, 38, 1);
        `}
      >
        <div
          css={css`
            color: #e5e5e5;
            font-size: 16px;
            font-weight: 700;
          `}
        >
          {itemType === "PRODUCT" ? "Produkty" : "Zakupy"}
        </div>

        <ButtonIcon
          onClick={open}
          css={css`
            width: 40px;
            height: 40px;
            border-radius: 10px;

            & > svg {
              width: 20px;
              height: 20px;
            }
          `}
        >
          <AddIcon />
        </ButtonIcon>

        <InsertDialog itemType={itemType} isOpen={isOpen} close={close} />
      </div>
    </div>
  );
};

const ItemList = ({ children, itemType, onSearch }: ItemListProps) => {
  return (
    <div
      aria-label="Lista elementów"
      css={css`
        position: relative;
        flex: 1 1;
        height: 100vh;
        border-right: 1px solid rgba(38, 38, 38, 1);
        background-color: #171717;
        font-size: 14px;
      `}
    >
      <ItemListHeader itemType={itemType} onSearch={onSearch} />

      <ul
        css={css`
          padding: 120px 12px 12px 12px;
          overflow-y: scroll;
          height: 100%;
        `}
      >
        {children}
      </ul>
    </div>
  );
};

export default ItemList;
