/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useDialogHandler } from "../../hooks/useDialogHandler";
import { DeleteIcon } from "../../icons/delete";
import { ProductData } from "../../types/product";
import { ButtonIcon } from "../Button/ButtonIcon";
import { RemoveDialog } from "../Dialog/RemoveDialog";
import { getProductColor, getProductIcon } from "./utils";

interface ProductHeaderProps {
  product?: ProductData;
}

const ProductHeader = ({ product }: ProductHeaderProps) => {
  const { isOpen, open, close } = useDialogHandler();

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

      <RemoveDialog itemType="PRODUCT" isOpen={isOpen} close={close} />
    </header>
  );
};

export { ProductHeader };
