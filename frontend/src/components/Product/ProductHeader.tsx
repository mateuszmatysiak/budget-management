/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { mutate } from "swr";
import { useClient } from "../../hooks/useApi";
import { useDialogHandler } from "../../hooks/useDialogHandler";
import { CloseIcon } from "../../icons/close";
import { DeleteIcon } from "../../icons/delete";
import { IProduct } from "../../types/product";
import { Button } from "../Button";
import { ButtonIcon } from "../ButtonIcon";
import { Dialog, DialogContent, DialogFooter, DialogHeader } from "../Dialog";
import { getProductColor, getProductIcon } from "./utils";

interface ProductHeaderProps {
  product?: IProduct;
}

const ProductHeader = ({ product }: ProductHeaderProps) => {
  const { productId } = useParams();
  const authClient = useClient();
  const navigate = useNavigate();

  const { isOpen, open, close } = useDialogHandler();

  const removeProduct = async () => {
    return await authClient(`products/${productId}`, {
      method: "DELETE",
    })
      .then(() => {
        close();
        mutate("products");
        mutate("last");
        navigate("/produkty");
        toast.success("Usunięto produkt");
      })
      .catch((err) => toast.error(err?.error));
  };

  return (
    <header
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 32px 112px;
      `}
    >
      <div
        css={css`
          display: flex;
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            background-image: ${getProductColor(product?.category)};
            padding: 16px;
            border-radius: 12px;
            margin-right: 32px;
            width: 84px;
            height: 84px;

            & > svg {
              width: 42px;
              height: 42px;
            }
          `}
        >
          {getProductIcon(product?.category)}
        </div>
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
            {product?.name}
          </span>
          <span
            css={css`
              color: rgba(163, 163, 163, 1);
              letter-spacing: 0.7px;
              font-weight: 300;
            `}
          >
            {product?.price} zł
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
        ariaLabel="Dialog pozwalający na usunięcie produktu"
        isOpen={isOpen}
        onDismiss={close}
      >
        <DialogHeader>
          <span>Usunięcie produktu</span>
          <ButtonIcon
            onClick={close}
            css={css`
              padding: 8px;
            `}
          >
            <CloseIcon />
          </ButtonIcon>
        </DialogHeader>
        <DialogContent>
          Czy na pewno chcesz usunąć wybrany produkt?
        </DialogContent>
        <DialogFooter>
          <Button fullWidth onClick={removeProduct}>
            Usuń
          </Button>
        </DialogFooter>
      </Dialog>
    </header>
  );
};

export { ProductHeader };
