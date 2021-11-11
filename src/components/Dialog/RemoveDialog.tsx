/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import { CloseIcon } from "../../icons/close";
import { Button } from "../Button/Button";
import { ButtonIcon } from "../Button/ButtonIcon";
import { ItemType } from "../ItemList";
import {
  DialogProps,
  StyledDialog,
  StyledDialogContent,
  StyledDialogFooter,
  StyledDialogHeader,
} from "./Dialog";

interface RemoveDialogProps extends DialogProps {
  itemType: ItemType;
}

function RemoveDialog({ itemType, isOpen, close }: RemoveDialogProps) {
  return (
    <StyledDialog
      aria-label={`Dialog pozwalający na usunięcie ${
        itemType === "PRODUCT" ? "produktu" : "zakupów"
      }`}
      isOpen={isOpen}
      onDismiss={close}
    >
      <StyledDialogHeader>
        <span>Usunięcie {itemType === "PRODUCT" ? "produktu" : "zakupu"}</span>
        <ButtonIcon
          css={css`
            padding: 8px;
          `}
          onClick={close}
        >
          <CloseIcon />
        </ButtonIcon>
      </StyledDialogHeader>

      <StyledDialogContent>
        <p>
          Czy na pewno chcesz usunąć{" "}
          {itemType === "PRODUCT" ? "wybrany produkt" : "wybrane zakupy"}?
        </p>
      </StyledDialogContent>
      <StyledDialogFooter>
        <Button fullWidth>Usuń</Button>
      </StyledDialogFooter>
    </StyledDialog>
  );
}

export { RemoveDialog };
