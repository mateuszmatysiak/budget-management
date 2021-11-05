/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React, { useState, Fragment } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import ItemList from "../components/Layout/ItemList";
import { Shopping } from "../components/Shopping/Shopping";
import { ShoppingListItem } from "../components/Shopping/ShoppingListItem";
import { ShoppingData } from "../types/shopping";

const shoppingData: ShoppingData[] = [
  {
    id: "1",
    name: "Zakupy na święta",
    date: new Date().toLocaleString(),
  },
  {
    id: "2",
    name: "Zakupy elektroniczne",
    date: new Date().toLocaleString(),
  },
];

const ShoppingView = () => {
  const { url, isExact } = useRouteMatch();
  const [shoppingItems, setShoppingItems] = useState(shoppingData);

  const handleSearch = (value: string) =>
    setShoppingItems(
      shoppingData.filter(({ name }) =>
        name.toLowerCase().includes(value.toLowerCase())
      )
    );

  return (
    <Fragment>
      <ItemList itemType="SHOPPING" onSearch={handleSearch}>
        {shoppingItems.map(({ id, name, date }) => (
          <ShoppingListItem
            key={id}
            to={`${url}/${id}`}
            name={name}
            date={date}
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
          <Route path={`${url}/:shoppingId`}>
            <Shopping shoppingItems={shoppingData} />
          </Route>
        </React.Fragment>
      )}
    </Fragment>
  );
};

export default ShoppingView;
