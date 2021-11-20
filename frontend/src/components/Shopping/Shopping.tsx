/** @jsxFrag React.Fragment */
/** @jsxRuntime classic */
import React from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { mutate } from "swr";
import { useClient } from "../../hooks/useApi";
import { FormIcon } from "../../icons/form";
import { IShopping } from "../../types/shopping";
import { Divider } from "../Divider";
import { FullPageError } from "../Error";
import { Section } from "../Section";
import { ShoppingForm } from "./ShoppingForm";
import { ShoppingHeader } from "./ShoppingHeader";
import { formatShoppingData } from "./utils";

interface ShoppingProps {
  shopping?: IShopping[];
}

const Shopping = ({ shopping }: ShoppingProps) => {
  const { shoppingId } = useParams();
  const authClient = useClient();

  const shoppingItem = shopping?.find((item) => String(item.id) === shoppingId);

  const editShopping = (data: IShopping) => {
    return authClient(`shopping/${shoppingId}`, {
      method: "PATCH",
      body: formatShoppingData(data),
    })
      .then(() => {
        mutate("shopping");
        mutate("last");
        toast.success("Edytowano liste zakupową");
      })
      .catch((err) => toast.error(err.error));
  };

  return (
    <Section aria-label="Sekcja wybranych zakupów">
      {shoppingItem ? (
        <>
          <ShoppingHeader shoppingItem={shoppingItem} />

          <Divider icon={<FormIcon />} />

          <ShoppingForm shoppingItem={shoppingItem} onSubmit={editShopping} />
        </>
      ) : (
        <FullPageError error={`Nie znaleziono zakupów o id: ${shoppingId}`} />
      )}
    </Section>
  );
};

export { Shopping };
