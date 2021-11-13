/** @jsxFrag React.Fragment */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import useSWR from "swr";
import { Product } from "../components/Product/Product";
import { ProductListItems } from "../components/Product/ProductListItems";
import { Section } from "../components/Section";
import { IProduct } from "../types/product";
import { client } from "../utils/api-client";

const ProductsView = () => {
  const params = useParams();

  const { data: products, error } = useSWR<IProduct[]>("products", () =>
    client("products")
  );

  return (
    <>
      <ProductListItems products={products} isLoading={!error && !products} />

      {!Object.values(params)[0]?.length ? (
        <Section />
      ) : (
        <Routes>
          <Route path="/:productId" element={<Product products={products} />} />
        </Routes>
      )}
    </>
  );
};

export default ProductsView;
