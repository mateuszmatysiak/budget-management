/** @jsxFrag React.Fragment */
/** @jsxRuntime classic */
import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { FullPageError } from "../components/Error";
import { Section } from "../components/Section";
import { Shopping } from "../components/Shopping/Shopping";
import { ShoppingListItems } from "../components/Shopping/ShoppingListItems";
import { useApi } from "../hooks/useApi";
import { IShopping } from "../types/shopping";

const ShoppingView = () => {
  const params = useParams();

  const { data: shopping, error } = useApi<IShopping[]>("shopping");

  if (error) return <FullPageError error={error} />;

  return (
    <>
      <ShoppingListItems shopping={shopping} isLoading={!shopping} />

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
