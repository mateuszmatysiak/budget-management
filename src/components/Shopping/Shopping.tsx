/** @jsxRuntime classic */
import React from "react";
import { useParams } from "react-router-dom";
import { FormIcon } from "../../icons/form";
import { ShoppingData } from "../../types/shopping";
import { Divider } from "../Divider";
import { Section } from "../Section";
import { ShoppingForm } from "./ShoppingForm";
import { ShoppingHeader } from "./ShoppingHeader";

interface ShoppingProps {
  shoppingItems: ShoppingData[];
}

const Shopping = ({ shoppingItems }: ShoppingProps) => {
  const { shoppingId } = useParams();
  const shoppingItem = shoppingItems.find((item) => item.id === shoppingId);

  return (
    <Section aria-label="Sekcja wybranych zakupów">
      <ShoppingHeader shoppingItem={shoppingItem} />

      <Divider icon={<FormIcon />} />

      <ShoppingForm formType="EDIT" shoppingItem={shoppingItem} />
    </Section>
  );
};

export { Shopping };
