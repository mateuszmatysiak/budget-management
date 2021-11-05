/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { CloseIcon } from "../../icons/close";
import { ButtonIcon } from "../Button/ButtonIcon";
import { ItemType } from "../Layout/ItemList";
import { ProductForm } from "../Products/ProductForm";
import { ShoppingForm } from "../Shopping/ShoppingForm";
import {
  DialogProps,
  StyledDialog,
  StyledDialogContent,
  StyledDialogHeader,
} from "./Dialog";

interface InsertDialogProps extends DialogProps {
  itemType: ItemType;
}

function InsertDialog({ isOpen, close, itemType }: InsertDialogProps) {
  return (
    <StyledDialog
      aria-label="Dialog pozwalający na dodanie elementu"
      isOpen={isOpen}
      onDismiss={close}
      css={css`
        width: ${itemType === "PRODUCT" ? "600px" : "800px"};
      `}
    >
      <StyledDialogHeader>
        <span>Dodanie {itemType === "PRODUCT" ? "produktu" : "zakupów"}</span>
        <ButtonIcon onClick={close}>
          <CloseIcon />
        </ButtonIcon>
      </StyledDialogHeader>
      <StyledDialogContent>
        {itemType === "PRODUCT" ? (
          <ProductForm noPadding />
        ) : (
          <ShoppingForm noPadding />
        )}
      </StyledDialogContent>
    </StyledDialog>
  );
}

export { InsertDialog };
