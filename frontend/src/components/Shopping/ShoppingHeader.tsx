/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { mutate } from "swr";
import { useClient } from "../../hooks/useApi";
import { useDialogHandler } from "../../hooks/useDialogHandler";
import { CloseIcon } from "../../icons/close";
import { DeleteIcon } from "../../icons/delete";
import * as mq from "../../styles/media-query";
import { IShopping } from "../../types/shopping";
import { LoadingButton } from "../Button";
import { ButtonIcon } from "../ButtonIcon";
import { Dialog, DialogContent, DialogFooter, DialogHeader } from "../Dialog";
import { dateFormatDistance } from "./utils";

interface ShoppingHeaderProps {
  shoppingItem?: IShopping;
}

const ShoppingHeader = ({ shoppingItem }: ShoppingHeaderProps) => {
  const { shoppingId } = useParams();
  const authClient = useClient();
  const navigate = useNavigate();

  const [loading, setLoading] = React.useState(false);

  const { isOpen, open, close } = useDialogHandler();

  const removeShoppingItem = async () => {
    setLoading(true);

    return await authClient(`shopping/${shoppingId}`, {
      method: "DELETE",
    })
      .then(() => {
        close();
        mutate("shopping");
        mutate("last");
        navigate("/zakupy");
        toast.success("Usunięto liste zakupową");
      })
      .catch((err) => toast.error(err.message))
      .then(() => setLoading(false));
  };

  return (
    <header
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 32px 112px;

        ${mq.laptop} {
          padding: 32px;
        }

        ${mq.mobile} {
          padding: 12px;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          height: 100px;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
          `}
        >
          <span
            css={css`
              font-size: 28px;
              font-weight: 700;
              letter-spacing: 0.7px;
              color: rgba(245, 245, 245, 1);
            `}
          >
            {shoppingItem?.name ?? "-"}
          </span>
          <span
            css={css`
              color: rgba(163, 163, 163, 1);
              letter-spacing: 0.7px;
              font-weight: 300;
            `}
          >
            {shoppingItem?.createdAt
              ? `Utworzono ${dateFormatDistance(shoppingItem.createdAt)}`
              : "-"}
          </span>
        </div>
      </div>

      <ButtonIcon
        onClick={open}
        css={css`
          width: 40px;
          height: 40px;
        `}
      >
        <DeleteIcon />
      </ButtonIcon>

      <Dialog
        ariaLabel="Dialog pozwalający na usunięcie listy zakupowej"
        isOpen={isOpen}
        onDismiss={close}
        width="500px"
      >
        <DialogHeader>
          <span>Usunięcie listy zakupowej</span>
          <ButtonIcon onClick={close}>
            <CloseIcon />
          </ButtonIcon>
        </DialogHeader>

        <DialogContent>
          Czy na pewno chcesz usunąć wybraną listę zakupów?
        </DialogContent>
        <DialogFooter>
          <LoadingButton
            fullWidth
            loading={loading}
            onClick={removeShoppingItem}
          >
            Usuń
          </LoadingButton>
        </DialogFooter>
      </Dialog>
    </header>
  );
};

export { ShoppingHeader };
