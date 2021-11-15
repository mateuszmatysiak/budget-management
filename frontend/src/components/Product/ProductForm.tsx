/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import { CategoryIcon } from "../../icons/category";
import { PriceIcon } from "../../icons/price";
import { TitleIcon } from "../../icons/title";
import { IProduct, ProductCategoryType } from "../../types/product";
import { Button } from "../Button";
import { Input, Select } from "../Input";

const DEFAULT_PRODUCT: IProduct = {
  name: "",
  price: "",
  category: "ECONOMIC",
};

interface ProductFormProps {
  product?: IProduct;
  onSubmit: (data: IProduct) => void;
  noPadding?: boolean;
}

const ProductForm = ({ product, noPadding, onSubmit }: ProductFormProps) => {
  const [data, setData] = React.useState(product ?? DEFAULT_PRODUCT);

  React.useEffect(() => {
    if (product) setData(product);
  }, [product]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit?.(data);
  };

  const preId = product?.id ? "edit" : "new";

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
        value={data?.category}
        onChange={(event) => {
          const value = event.target.value as ProductCategoryType;
          setData({ ...data, category: value });
        }}
        icon={<CategoryIcon />}
        required
      >
        <option value="ECONOMIC">Gospodarcze</option>
        <option value="ELECTRONIC">Elektroniczne</option>
        <option value="HOMEMADE">Domowe</option>
      </Select>

      <Input
        id={`${preId}-name`}
        name={`${preId}-name`}
        placeholder="Nazwa produktu"
        value={data?.name}
        onChange={(event) => setData({ ...data, name: event.target.value })}
        icon={<TitleIcon />}
        required
      />

      <Input
        type="number"
        id={`${preId}-price`}
        name={`${preId}-price`}
        placeholder="Cena produktu"
        value={data?.price}
        onChange={(event) => setData({ ...data, price: event.target.value })}
        icon={<PriceIcon />}
        required
      />

      <Button type="submit" fullWidth>
        Zapisz
      </Button>
    </form>
  );
};

export { ProductForm };
