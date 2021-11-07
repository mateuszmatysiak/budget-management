/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useDialogHandler } from "../../hooks/useDialogHandler";
import { DeleteIcon } from "../../icons/delete";
import { ShoppingData } from "../../types/shopping";
import { ButtonIcon } from "../Button/ButtonIcon";
import { RemoveDialog } from "../Dialog/RemoveDialog";

interface ShoppingHeaderProps {
  shoppingItem?: ShoppingData;
}

const ShoppingHeader = ({ shoppingItem }: ShoppingHeaderProps) => {
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
            {shoppingItem?.name}
          </span>
          <span
            css={css`
              color: rgba(163, 163, 163, 1);
              letter-spacing: 0.7px;
              font-weight: 300;
            `}
          >
            {shoppingItem?.date}
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

      <RemoveDialog itemType="SHOPPING" isOpen={isOpen} close={close} />
    </header>
  );
};

export { ShoppingHeader };
