import styled from "@emotion/styled";
import React from "react";
import { CategoryIcon } from "../../icons/category";
import { CostIcon } from "../../icons/cost";
import { TitleIcon } from "../../icons/title";
import { ProductCategoryType, ProductData } from "../../types/product";
import { Button } from "../Button/Button";
import { Input, Select } from "../Input/Input";

interface StyledProductFormProps {
  noPadding?: boolean;
}

interface ProductFormProps extends StyledProductFormProps {
  product?: ProductData;
}

const DEFAULT_PRODUCT = {
  name: "",
  cost: "",
  category: "ECONOMIC",
};

const StyledProductForm = styled.form<StyledProductFormProps>`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  padding: ${({ noPadding }) => (noPadding ? 0 : "32px 112px")};
`;

const ProductForm = ({ product, noPadding }: ProductFormProps) => {
  const [data, setData] = React.useState(product ?? DEFAULT_PRODUCT);

  React.useEffect(() => {
    if (product) setData(product);
  }, [product]);

  return (
    <StyledProductForm noPadding={noPadding}>
      <Select
        id="category"
        name="category"
        placeholder="Kategoria produktu"
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
        id="name"
        name="name"
        placeholder="Nazwa produktu"
        value={data?.name}
        onChange={(event) => setData({ ...data, name: event.target.value })}
        icon={<TitleIcon />}
        required
      />

      <Input
        type="number"
        id="cost"
        name="cost"
        placeholder="Cena produktu"
        value={data?.cost}
        onChange={(event) => setData({ ...data, cost: event.target.value })}
        icon={<CostIcon />}
        required
      />

      <Button fullWidth>Zapisz</Button>
    </StyledProductForm>
  );
};

export { ProductForm };
