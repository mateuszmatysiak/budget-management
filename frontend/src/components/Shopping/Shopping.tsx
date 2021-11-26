/** @jsxFrag React.Fragment */
/** @jsxRuntime classic */
import React from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { mutate } from "swr";
import { useApi, useClient } from "../../hooks/useApi";
import { FormIcon } from "../../icons/form";
import { IShopping } from "../../types/shopping";
import { Divider } from "../Divider";
import { FullPageError } from "../Error";
import { FullPageLoader } from "../Loader";
import { Section } from "../Section";
import { ShoppingForm } from "./ShoppingForm";
import { ShoppingHeader } from "./ShoppingHeader";
import { formatShoppingData } from "./utils";

const Shopping = () => {
  const { shoppingId } = useParams();
  const authClient = useClient();

  const { data: shoppingItem, error } = useApi<IShopping>(
    `shopping/${shoppingId}`
  );

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
      .catch((err) => toast.error(err.message));
  };

  return (
    <Section aria-label="Sekcja wybranych zakupów">
      {error ? <FullPageError error={error.message} /> : null}

      {!shoppingItem ? <FullPageLoader /> : null}

      {shoppingItem ? (
        <>
          <ShoppingHeader shoppingItem={shoppingItem} />

          <Divider icon={<FormIcon />} />

          <ShoppingForm shoppingItem={shoppingItem} onSubmit={editShopping} />
        </>
      ) : null}
    </Section>
  );
};

export { Shopping };
