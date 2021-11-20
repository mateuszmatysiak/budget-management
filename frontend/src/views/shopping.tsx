/** @jsxFrag React.Fragment */
/** @jsxRuntime classic */
import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { FullPageError } from "../components/Error";
import { FullPageLoader } from "../components/Loader";
import { Section } from "../components/Section";
import { Shopping } from "../components/Shopping/Shopping";
import { ShoppingListItems } from "../components/Shopping/ShoppingListItems";
import { useApi } from "../hooks/useApi";
import { IShopping } from "../types/shopping";

const ShoppingView = () => {
  const params = useParams();

  const { data: shopping, error } = useApi<IShopping[]>("shopping");

  const isParamExist = Object.values(params)[0]?.length;

  if (error) return <FullPageError error={error} />;

  if (!shopping) return <FullPageLoader />;

  return (
    <>
      <ShoppingListItems shopping={shopping} />

      {!isParamExist ? (
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
