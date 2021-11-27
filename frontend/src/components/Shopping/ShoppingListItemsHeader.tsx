/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { mutate } from "swr";
import { useClient } from "../../hooks/useApi";
import { useDialogHandler } from "../../hooks/useDialogHandler";
import { AddIcon } from "../../icons/add";
import { CloseIcon } from "../../icons/close";
import { SearchIcon } from "../../icons/search";
import { IShopping } from "../../types/shopping";
import { ButtonIcon } from "../ButtonIcon";
import { Dialog, DialogContent, DialogHeader } from "../Dialog";
import { Input } from "../Input";
import { ShoppingForm } from "./ShoppingForm";
import { formatShoppingData } from "./utils";

interface ShoppingListItemsHeaderProps {
  onSearch: (value: string) => void;
}

const ShoppingListItemsHeader = ({
  onSearch,
}: ShoppingListItemsHeaderProps) => {
  const navigate = useNavigate();
  const { key } = useLocation();
  const authClient = useClient();
  const { isOpen, open, close } = useDialogHandler();

  const createShoppingItem = (data: IShopping) => {
    return authClient("shopping", { body: formatShoppingData(data) })
      .then(({ id }: IShopping) => {
        mutate("shopping");
        mutate("last");
        navigate(`/zakupy/${id}`);
        toast.success("Utworzono liste zakupową");
      })
      .catch((err) => toast.error(err.message));
  };

  React.useEffect(() => close(), [key]);

  return (
    <div
      css={css`
        position: absolute;
        width: 100%;
        background-color: rgba(23, 23, 23, 0.85);
        box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px;
        backdrop-filter: saturate(180%) blur(20px);
        z-index: 1;
      `}
    >
      <Input
        type="search"
        name="search"
        placeholder="Wyszukaj liste zakupową"
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
          Zakupy
        </div>

        <ButtonIcon
          onClick={open}
          css={css`
            width: 40px;
            height: 40px;

            & > svg {
              width: 20px;
              height: 20px;
            }
          `}
        >
          <AddIcon />
        </ButtonIcon>

        <Dialog
          ariaLabel="Dialog pozwalający na dodanie listy zakupowej"
          isOpen={isOpen}
          onDismiss={close}
          width="700px"
        >
          <DialogHeader>
            <span>Dodanie listy zakupowej</span>
            <ButtonIcon onClick={close}>
              <CloseIcon />
            </ButtonIcon>
          </DialogHeader>
          <DialogContent>
            <ShoppingForm noPadding onSubmit={createShoppingItem} />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export { ShoppingListItemsHeader };
