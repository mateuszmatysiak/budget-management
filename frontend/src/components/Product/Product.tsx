/** @jsxFrag React.Fragment */
/** @jsxRuntime classic */
import React from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { mutate } from "swr";
import { useClient } from "../../hooks/useApi";
import { FormIcon } from "../../icons/form";
import { HistoryIcon } from "../../icons/history";
import { LineChartIcon } from "../../icons/linechart";
import { IProduct } from "../../types/product";
import { Divider } from "../Divider";
import { FullPageError } from "../Error";
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
  const authClient = useClient();

  const product = products?.find((item) => String(item.id) === productId);

  const editProduct = (data: IProduct) => {
    return authClient(`products/${productId}`, {
      method: "PATCH",
      body: data,
    })
      .then(() => {
        mutate("products");
        mutate("last");
        toast.success("Edytowano produkt");
      })
      .catch((err) => toast.error(err?.error));
  };

  return (
    <Section aria-label="Sekcja wybranego produktu">
      {product ? (
        <>
          <ProductHeader product={product} />

          <Divider icon={<FormIcon />} />

          <ProductForm product={product} onSubmit={editProduct} />

          <Divider icon={<HistoryIcon />} />

          <ProductHistory history={product?.history} />

          <Divider icon={<LineChartIcon />} />

          <ProductChart history={product?.history} />
        </>
      ) : (
        <FullPageError error={`Nie znaleziono produktu o id: ${productId}`} />
      )}
    </Section>
  );
};

export { Product };
