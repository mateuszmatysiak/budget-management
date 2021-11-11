/** @jsxFrag React.Fragment */
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Route, Routes, useParams } from "react-router-dom";
import ItemList from "../components/ItemList";
import { Product } from "../components/Product/Product";
import { ProductListItem } from "../components/Product/ProductListItem";
import { Section } from "../components/Section";
import { SpinnerIcon } from "../icons/spinner";
import { ProductData } from "../types/product";
import { client } from "../utils/api-client";

export const productData: ProductData[] = [
  {
    id: 1,
    name: "Kotlet schabowy",
    price: "15.21",
    category: "ECONOMIC",
  },
  {
    id: 2,
    name: "Telewizor",
    price: "4999.99",
    category: "ELECTRONIC",
  },
  {
    id: 3,
    name: "Płyn do mycia naczyń",
    price: "9.99",
    category: "HOMEMADE",
  },
];

const ProductsView = () => {
  const params = useParams();

  const [searchProducts, setSearchProducts] = useState<ProductData[]>([]);

  const { data: products = [], isLoading } = useQuery<ProductData[]>(
    "products",
    () => client("products")
  );

  useEffect(() => {
    if (products) setSearchProducts(products);
  }, [products]);

  const handleSearch = (value: string) =>
    setSearchProducts(
      products.filter(({ name }) =>
        name.toLowerCase().includes(value.toLowerCase())
      )
    );

  return (
    <>
      <ItemList itemType="PRODUCT" onSearch={handleSearch}>
        {!isLoading ? (
          searchProducts.map((props, index) => (
            <ProductListItem key={index} {...props} />
          ))
        ) : (
          <div
            css={css`
              text-align: center;
            `}
          >
            <SpinnerIcon width="25px" height="25px" />
          </div>
        )}
      </ItemList>

      {!Object.values(params)[0]?.length ? <Section /> : null}

      <Routes>
        <Route path="/:productId" element={<Product products={products} />} />
      </Routes>
    </>
  );
};

export default ProductsView;
