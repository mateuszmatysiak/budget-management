/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import useSWR from "swr";
import { useSearchHandler } from "../../hooks/useSearchHandler";
import { SearchIcon } from "../../icons/search";
import { TitleIcon } from "../../icons/title";
import { IProduct } from "../../types/product";
import { IShopping } from "../../types/shopping";
import { client } from "../../utils/api-client";
import { Button } from "../Button";
import { EmptyState } from "../EmptyState";
import { Loader } from "../FullPageLoader";
import { Input } from "../Input";
import { ProductListCheckboxItem } from "../Product/ProductListCheckboxItem";

const DEFAULT_SHOPPING_ITEM: IShopping = {
  name: "",
  products: [],
};

interface ShoppingFormProps {
  shoppingItem?: IShopping;
  onSubmit: (data: IShopping) => void;
  noPadding?: boolean;
}

const ShoppingForm = ({
  shoppingItem,
  noPadding,
  onSubmit,
}: ShoppingFormProps) => {
  const { data: products, error } = useSWR<IProduct[]>("products", () =>
    client("products")
  );

  const isLoading = !error && !products;

  const [formData, setFormData] = React.useState<IShopping>(
    () => shoppingItem ?? DEFAULT_SHOPPING_ITEM
  );
  const productsByChecked = React.useMemo(() => {
    return products
      ?.map((product) => ({
        ...product,
        isChecked: formData.products.some((item) => item.id === product.id),
      }))
      .sort((product) => (product.isChecked ? -1 : 1));
  }, [products, formData.products]);

  const { searchData, handleSearch } = useSearchHandler(productsByChecked);

  React.useEffect(() => {
    if (shoppingItem) setFormData(shoppingItem);
  }, [shoppingItem]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit?.(formData);
  };

  const preId = shoppingItem?.id ? "edit" : "new";

  return (
    <form
      aria-label="Formularz listy zakupowej"
      onSubmit={handleSubmit}
      css={css`
        display: grid;
        grid-template-columns: 1fr;
        gap: 24px;
        padding: ${noPadding ? 0 : "32px 112px"};
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
          {!isLoading ? (
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

      <Button type="submit" fullWidth>
        Zapisz
      </Button>
    </form>
  );
};

export { ShoppingForm };
