/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { mutate } from "swr";
import { useClient } from "../../hooks/useApi";
import { useDialogHandler } from "../../hooks/useDialogHandler";
import { AddIcon } from "../../icons/add";
import { CloseIcon } from "../../icons/close";
import { SearchIcon } from "../../icons/search";
import { IProduct } from "../../types/product";
import { ButtonIcon } from "../ButtonIcon";
import { Dialog, DialogContent, DialogHeader } from "../Dialog";
import { Input } from "../Input";
import { ProductForm } from "./ProductForm";

interface ProductListItemsHeaderProps {
  onSearch: (value: string) => void;
}

const ProductListItemsHeader = ({ onSearch }: ProductListItemsHeaderProps) => {
  const navigate = useNavigate();
  const authClient = useClient();
  const { isOpen, open, close } = useDialogHandler();

  const createProduct = async (data: IProduct) => {
    return await authClient("products", { body: data })
      .then(({ id }: IProduct) => {
        mutate("products");
        mutate("last");
        navigate(`/produkty/${id}`);
        close();
        toast.success("Utworzono produkt");
      })
      .catch((err) => toast.error(err?.error));
  };

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
        placeholder="Wyszukaj produkt"
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
          Produkty
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
          ariaLabel="Dialog pozwalający na dodanie produktu"
          isOpen={isOpen}
          onDismiss={close}
          width="600px"
        >
          <DialogHeader>
            <span>Dodanie produktu</span>
            <ButtonIcon
              css={css`
                padding: 8px;
              `}
              onClick={close}
            >
              <CloseIcon />
            </ButtonIcon>
          </DialogHeader>
          <DialogContent>
            <ProductForm noPadding onSubmit={createProduct} />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export { ProductListItemsHeader };
