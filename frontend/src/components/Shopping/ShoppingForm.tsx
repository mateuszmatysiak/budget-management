/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import { useApi } from "../../hooks/useApi";
import { useSearchHandler } from "../../hooks/useSearchHandler";
import { SearchIcon } from "../../icons/search";
import { TitleIcon } from "../../icons/title";
import { IProduct } from "../../types/product";
import { IShopping } from "../../types/shopping";
import { Button } from "../Button";
import { EmptyState } from "../EmptyState";
import { FullPageError } from "../Error";
import { Input } from "../Input";
import { Loader } from "../Loader";
import { ProductListCheckboxItem } from "../Product/ProductListCheckboxItem";

const DEFAULT_SHOPPING_ITEM: IShopping = {
  name: "",
  products: [],
};

interface ShoppingFormProps {
  shoppingItem?: IShopping;
  onSubmit: (data: IShopping) => Promise<any>;
  noPadding?: boolean;
}

const ShoppingForm = ({
  shoppingItem,
  noPadding,
  onSubmit,
}: ShoppingFormProps) => {
  const { data: products, error } = useApi<IProduct[]>("products");
  const [loading, setLoading] = React.useState(false);

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

    setLoading(true);
    onSubmit?.(formData).then(() => setLoading(false));
  };

  const preId = shoppingItem?.id ? "edit" : "new";

  if (error) return <FullPageError error={error} />;

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

      <Button type="submit" disabled={loading} fullWidth>
        {!loading ? (
          "Zapisz"
        ) : (
          <Loader width="12px" height="12px" borderWidth="2px" />
        )}
      </Button>
    </form>
  );
};

export { ShoppingForm };
