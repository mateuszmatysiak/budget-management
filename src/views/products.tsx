/** @jsxFrag React.Fragment */
/** @jsxRuntime classic */
import React, { useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import ItemList from "../components/Layout/ItemList";
import { Section } from "../components/Layout/Section";
import { Product } from "../components/Products/Product";
import { ProductListItem } from "../components/Products/ProductListItem";
import { FoodIcon } from "../icons/food";
import { ProductData } from "../types/product";

export const productData: ProductData[] = [
  {
    id: "kotlet-schabowy",
    name: "Kotlet schabowy",
    cost: "15.25",
    category: "ECONOMIC",
  },
  {
    id: "jajka",
    name: "Jajka",
    cost: "0.98",
    category: "ECONOMIC",
  },
];

const ProductsView = () => {
  const params = useParams();
  const [products, setProducts] = useState(productData);

  const handleSearch = (value: string) =>
    setProducts(
      productData.filter(({ name }) =>
        name.toLowerCase().includes(value.toLowerCase())
      )
    );

  return (
    <>
      <ItemList itemType="PRODUCT" onSearch={handleSearch}>
        {products.map((props, index) => (
          <ProductListItem key={index} icon={<FoodIcon />} {...props} />
        ))}
      </ItemList>

      {!Object.values(params)[0]?.length ? <Section /> : null}

      <Routes>
        <Route
          path="/:productId"
          element={<Product products={productData} />}
        />
      </Routes>
    </>
  );
};

export default ProductsView;
