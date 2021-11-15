/** @jsxRuntime classic */
import React from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { mutate } from "swr";
import { FormIcon } from "../../icons/form";
import { HistoryIcon } from "../../icons/history";
import { LineChartIcon } from "../../icons/linechart";
import { IProduct } from "../../types/product";
import { client } from "../../utils/api-client";
import { Divider } from "../Divider";
import { Section } from "../Section";
import { ProductChart } from "./ProductChart";
import { ProductForm } from "./ProductForm";
import { ProductHeader } from "./ProductHeader";
import { ProductHistory } from "./ProductHistory";

interface ProductProps {
  products?: IProduct[];
}

const Product = ({ products }: ProductProps) => {
  const { productId } = useParams();
  const product = products?.find((item) => String(item.id) === productId);

  const editProduct = (data: IProduct) =>
    client(`products/${productId}`, {
      customConfig: { method: "PATCH" },
      body: data,
    })
      .then(() => {
        mutate("products");
        mutate("last");
        toast.success("Edytowano produkt");
      })
      .catch((err) => console.log(err));

  return (
    <Section aria-label="Sekcja wybranego produktu">
      <ProductHeader product={product} />

      <Divider icon={<FormIcon />} />

      <ProductForm product={product} onSubmit={editProduct} />

      <Divider icon={<HistoryIcon />} />

      <ProductHistory />

      <Divider icon={<LineChartIcon />} />

      <ProductChart />
    </Section>
  );
};

export { Product };
