import React from "react";
import { useParams } from "react-router-dom";
import { FormIcon } from "../../icons/form";
import { ShoppingData } from "../../types/shopping";
import { Divider } from "../Layout/Divider";
import { Section } from "../Layout/Section";
import { ShoppingForm } from "./ShoppingForm";
import { ShoppingHeader } from "./ShoppingHeader";

interface ShoppingProps {
  shoppingItems: ShoppingData[];
}

const Shopping = ({ shoppingItems }: ShoppingProps) => {
  const { shoppingId } = useParams<{ shoppingId?: string }>();
  const shoppingItem = shoppingItems.find((item) => item.id === shoppingId);

  return (
    <Section aria-label="Sekcja wybranych zakupów">
      <ShoppingHeader shoppingItem={shoppingItem} />

      <Divider icon={<FormIcon />} />

      <ShoppingForm shoppingItem={shoppingItem} />
    </Section>
  );
};

export { Shopping };
