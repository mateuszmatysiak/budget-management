/** @jsxFrag React.Fragment */
/** @jsxRuntime classic */
import React from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { mutate } from "swr";
import { useApi, useClient } from "../../hooks/useApi";
import { FormIcon } from "../../icons/form";
import { HistoryIcon } from "../../icons/history";
import { LineChartIcon } from "../../icons/linechart";
import { IProduct } from "../../types/product";
import { Divider } from "../Divider";
import { FullPageError } from "../Error";
import { FullPageLoader } from "../Loader";
import { Section } from "../Section";
import { ProductChart } from "./ProductChart";
import { ProductForm } from "./ProductForm";
import { ProductHeader } from "./ProductHeader";
import { ProductHistory } from "./ProductHistory";

const Product = () => {
  const { productId } = useParams();
  const authClient = useClient();

  const {
    data: product,
    error,
    mutate: productMutate,
  } = useApi<IProduct>(`products/${productId}`);

  const editProduct = (data: IProduct) => {
    return authClient(`products/${productId}`, {
      method: "PATCH",
      body: data,
    })
      .then((product: IProduct) => {
        mutate("products");
        mutate("last");
        productMutate(product);
        toast.success("Edytowano produkt");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <Section aria-label="Sekcja wybranego produktu">
      {error ? <FullPageError error={error.message} /> : null}

      {!product ? <FullPageLoader /> : null}

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
      ) : null}
    </Section>
  );
};

export { Product };
