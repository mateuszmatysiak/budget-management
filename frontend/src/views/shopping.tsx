/** @jsxFrag React.Fragment */
/** @jsxRuntime classic */
import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import useSWR from "swr";
import { Section } from "../components/Section";
import { Shopping } from "../components/Shopping/Shopping";
import { ShoppingListItems } from "../components/Shopping/ShoppingListItems";
import { IShopping } from "../types/shopping";
import { client } from "../utils/api-client";

const ShoppingView = () => {
  const params = useParams();

  const { data: shopping, error } = useSWR<IShopping[]>("shopping", () =>
    client("shopping")
  );

  return (
    <>
      <ShoppingListItems shopping={shopping} isLoading={!error && !shopping} />

      {!Object.values(params)[0]?.length ? (
        <Section />
      ) : (
        <Routes>
          <Route
            path="/:shoppingId"
            element={<Shopping shopping={shopping} />}
          />
        </Routes>
      )}
    </>
  );
};

export default ShoppingView;
