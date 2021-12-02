/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import { useApi } from "../../hooks/useApi";
import { useSearchHandler } from "../../hooks/useSearchHandler";
import { SearchIcon } from "../../icons/search";
import { TitleIcon } from "../../icons/title";
import * as mq from "../../styles/media-query";
import { IProduct } from "../../types/product";
import { IShopping } from "../../types/shopping";
import { LoadingButton } from "../Button";
import { EmptyState } from "../EmptyState";
import { ErrorMessage, FullPageError } from "../Error";
import { Input } from "../Input";
import { Loader } from "../Loader";
import { ProductListCheckboxItem } from "../Product/ProductListCheckboxItem";
import {
  formatShoppingProducts,
  sortShoppingProductsByIsChecked,
} from "./utils";

const DEFAULT_SHOPPING_ITEM: IShopping = {
  name: "",
  products: [],
};

interface ShoppingFormProps {
  shoppingItem?: IShopping;
  onSubmit: (data: IShopping) => Promise<any>;
}

const ShoppingForm = ({
  shoppingItem = DEFAULT_SHOPPING_ITEM,
  onSubmit,
}: ShoppingFormProps) => {
  const { data: products, error } = useApi<IProduct[]>("products");
  const [loading, setLoading] = React.useState(false);

  const [formData, setFormData] = React.useState<IShopping>(shoppingItem);

  const shoppingProducts = formatShoppingProducts(products, shoppingItem);

  const sortedProductsByIsChecked = React.useMemo(() => {
    return sortShoppingProductsByIsChecked(shoppingProducts, formData);
  }, [products, formData.products]);

  const { searchData, handleSearch } = useSearchHandler(
    sortedProductsByIsChecked
  );

  React.useEffect(() => {
    if (shoppingItem) setFormData(shoppingItem);
  }, [shoppingItem]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);
    onSubmit?.(formData).then(() => setLoading(false));
  };

  const preId = shoppingItem?.id ? "edit" : "new";

  if (error)
    return preId === "new" ? (
      <ErrorMessage error={error} />
    ) : (
      <FullPageError error={error} />
    );

  return (
    <form
      aria-label="Formularz listy zakupowej"
      onSubmit={handleSubmit}
      css={css`
        display: grid;
        grid-template-columns: 1fr;
        gap: 24px;
        padding: ${preId === "new" ? 0 : "32px 112px"};

        ${mq.laptop} {
          padding: ${preId === "new" ? 0 : "32px"};
        }

        ${mq.mobile} {
          padding: ${preId === "new" ? 0 : "32px 12px"};
        }
      `}
    >
      <Input
        id={`${preId}-name`}
        name={`${preId}-name`}
        placeholder="Nazwa listy zakupowej"
        value={formData?.name}
        onChange={(event) =>
          setFormData({ ...formData, name: event.target.value })
        }
        icon={<TitleIcon />}
        required
      />

      <div
        css={css`
          background-color: #232323;
          border-radius: 5px;
          border: 1px solid rgba(229, 229, 229, 0.2);
          color: rgba(245, 245, 245, 1);
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px;
            border-bottom: 1px solid rgba(229, 229, 229, 0.15);
            font-size: 14px;
            font-weight: 300;
            letter-spacing: 0.5px;
          `}
        >
          Lista produktów
        </div>

        <Input
          type="search"
          name="search"
          placeholder="Wyszukaj produkt"
          onChange={(event) => handleSearch(event.target.value)}
          icon={<SearchIcon />}
        />

        <div
          css={css`
            padding: 8px;
            overflow-y: scroll;
            max-height: 400px;
          `}
        >
          {products ? (
            searchData.length ? (
              searchData.map((productData, index) => (
                <ProductListCheckboxItem
                  key={index}
                  formData={formData}
                  setFormData={setFormData}
                  product={productData}
                />
              ))
            ) : (
              <EmptyState>Nie znaleziono produktu</EmptyState>
            )
          ) : (
            <Loader />
          )}
        </div>
      </div>
      <LoadingButton type="submit" fullWidth loading={loading}>
        Zapisz
      </LoadingButton>
    </form>
  );
};

export { ShoppingForm };
