import styled from "@emotion/styled";
import React from "react";
import { CategoryIcon } from "../../icons/category";
import { PriceIcon } from "../../icons/price";
import { TitleIcon } from "../../icons/title";
import { ProductCategoryType, ProductData } from "../../types/product";
import { Button } from "../Button/Button";
import { Input, Select } from "../Input";

interface ProductFormProps {
  product?: ProductData;
  noPadding?: boolean;
  formType?: string;
}

const DEFAULT_PRODUCT = {
  name: "",
  price: "",
  category: "ECONOMIC",
};

const StyledProductForm = styled.form<ProductFormProps>`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  padding: ${({ noPadding }) => (noPadding ? 0 : "32px 112px")};
`;

const ProductForm = ({
  product,
  noPadding,
  formType = "ADD",
}: ProductFormProps) => {
  const [data, setData] = React.useState(product ?? DEFAULT_PRODUCT);

  React.useEffect(() => {
    if (product) setData(product);
  }, [product]);

  return (
    <StyledProductForm noPadding={noPadding} aria-label="Formularz produktu">
      <Select
        id={`${formType}-category`}
        name={`${formType}-category`}
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
        id={`${formType}-name`}
        name={`${formType}-name`}
        placeholder="Nazwa produktu"
        value={data?.name}
        onChange={(event) => setData({ ...data, name: event.target.value })}
        icon={<TitleIcon />}
        required
      />

      <Input
        type="number"
        id={`${formType}-price`}
        name={`${formType}-price`}
        placeholder="Cena produktu"
        value={data?.price}
        onChange={(event) => setData({ ...data, price: event.target.value })}
        icon={<PriceIcon />}
        required
      />

      <Button fullWidth>Zapisz</Button>
    </StyledProductForm>
  );
};

export { ProductForm };
