/** @jsxFrag React.Fragment */
/** @jsxRuntime classic */
import React, { useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import ItemList from "../components/Layout/ItemList";
import { Section } from "../components/Layout/Section";
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
  const params = useParams();
  const [shoppingItems, setShoppingItems] = useState(shoppingData);

  const handleSearch = (value: string) =>
    setShoppingItems(
      shoppingData.filter(({ name }) =>
        name.toLowerCase().includes(value.toLowerCase())
      )
    );

  return (
    <>
      <ItemList itemType="SHOPPING" onSearch={handleSearch}>
        {shoppingItems.map((props, index) => (
          <ShoppingListItem key={index} {...props} />
        ))}
      </ItemList>

      {!Object.values(params)[0]?.length ? <Section /> : null}

      <Routes>
        <Route
          path="/:shoppingId"
          element={<Shopping shoppingItems={shoppingData} />}
        />
      </Routes>
    </>
  );
};

export default ShoppingView;
