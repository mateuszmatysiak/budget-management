/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React, { useState, Fragment } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import ItemList from "../components/Layout/ItemList";
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
  const { url, isExact } = useRouteMatch();
  const [products, setProducts] = useState(productData);

  const handleSearch = (value: string) =>
    setProducts(
      productData.filter(({ name }) =>
        name.toLowerCase().includes(value.toLowerCase())
      )
    );

  return (
    <Fragment>
      <ItemList itemType="PRODUCT" onSearch={handleSearch}>
        {products.map(({ id, name, cost }) => (
          <ProductListItem
            key={id}
            to={`${url}/${id}`}
            icon={<FoodIcon />}
            name={name}
            cost={cost}
          />
        ))}
      </ItemList>

      {isExact ? (
        <section
          aria-label="Pusta sekcja"
          css={css`
            flex: 2 2;
          `}
        />
      ) : (
        <React.Fragment>
          <Route path={`${url}/:productId`}>
            <Product products={productData} />
          </Route>
        </React.Fragment>
      )}
    </Fragment>
  );
};

export default ProductsView;
