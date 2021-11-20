/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import { useApi } from "../../hooks/useApi";
import { CategoryIcon } from "../../icons/category";
import { PriceIcon } from "../../icons/price";
import { TitleIcon } from "../../icons/title";
import { TypeIcon } from "../../icons/type";
import {
  IProduct,
  IProductCategoriesAndTypes,
  ProductCategoryType,
  ProductType,
} from "../../types/product";
import { LoadingButton } from "../Button";
import { FullPageError } from "../Error";
import { Input, Select } from "../Input";

const DEFAULT_PRODUCT: IProduct = {
  name: "",
  price: "",
  type: "KG",
  category: "ECONOMIC",
};

interface ProductFormProps {
  product?: IProduct;
  onSubmit: (data: IProduct) => Promise<any>;
  noPadding?: boolean;
}

const ProductForm = ({ product, noPadding, onSubmit }: ProductFormProps) => {
  const [data, setData] = React.useState(product ?? DEFAULT_PRODUCT);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (product) setData(product);
  }, [product]);

  const { data: productItems, error } = useApi<IProductCategoriesAndTypes>(
    "products/categoriesAndTypes"
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);
    await onSubmit?.(data).then(() => setLoading(false));
  };

  const preId = product?.id ? "edit" : "new";

  if (error) return <FullPageError error={error} />;

  return (
    <form
      aria-label="Formularz produktu"
      onSubmit={handleSubmit}
      css={css`
        display: grid;
        grid-template-columns: 1fr;
        gap: 24px;
        padding: ${noPadding ? 0 : "32px 112px"};
      `}
    >
      <Select
        id={`${preId}-category`}
        name={`${preId}-category`}
        value={data.category}
        onChange={(event) => {
          const value = event.target.value as ProductCategoryType;
          setData({ ...data, category: value });
        }}
        icon={<CategoryIcon />}
        loading={!productItems}
        required
      >
        {productItems?.categories?.map(({ name, label }) => (
          <option key={name} value={name}>
            {label}
          </option>
        ))}
      </Select>

      <Input
        id={`${preId}-name`}
        name={`${preId}-name`}
        placeholder="Nazwa produktu"
        value={data.name}
        onChange={(event) => setData({ ...data, name: event.target.value })}
        icon={<TitleIcon />}
        required
      />

      <Select
        id={`${preId}-type`}
        name={`${preId}-type`}
        value={data.type}
        onChange={(event) => {
          const value = event.target.value as ProductType;
          setData({ ...data, type: value });
        }}
        icon={<TypeIcon />}
        loading={!productItems}
        required
      >
        {productItems?.types?.map(({ name, label }) => (
          <option key={name} value={name}>
            {label}
          </option>
        ))}
      </Select>

      <Input
        type="number"
        id={`${preId}-price`}
        name={`${preId}-price`}
        placeholder="Cena produktu"
        value={data.price}
        onChange={(event) => {
          setData({ ...data, price: event.target.value });
        }}
        onBlur={(event) => {
          setData({ ...data, price: Number(event.target.value).toFixed(2) });
        }}
        icon={<PriceIcon />}
        required
      />

      <LoadingButton type="submit" fullWidth loading={loading || !productItems}>
        Zapisz
      </LoadingButton>
    </form>
  );
};

export { ProductForm };
