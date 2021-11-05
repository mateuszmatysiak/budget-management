import React from "react";
import { useParams } from "react-router-dom";
import { FormIcon } from "../../icons/form";
import { HistoryIcon } from "../../icons/history";
import { ProductData } from "../../types/product";
import { Divider } from "../Layout/Divider";
import { Section } from "../Layout/Section";
import { ProductForm } from "./ProductForm";
import { ProductHeader } from "./ProductHeader";
import { ProductHistory } from "./ProductHistory";

interface ProductProps {
  products: ProductData[];
}

const Product = ({ products }: ProductProps) => {
  const { productId } = useParams<{ productId?: string }>();
  const product = products.find((item) => item.id === productId);

  return (
    <Section aria-label="Sekcja wybranego produktu">
      <ProductHeader product={product} />

      <Divider icon={<FormIcon />} />

      <ProductForm product={product} />

      <Divider icon={<HistoryIcon />} />

      <ProductHistory />
    </Section>
  );
};

export { Product };
