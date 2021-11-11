/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { SearchIcon } from "../../icons/search";
import { TitleIcon } from "../../icons/title";
import { ShoppingData } from "../../types/shopping";
import { productData } from "../../views/products";
import { Button } from "../Button/Button";
import { Input } from "../Input";
import { ProductCheckboxItem } from "../Product/ProductListItem";

interface ShoppingFormProps {
  shoppingItem?: ShoppingData;
  noPadding?: boolean;
  formType?: string;
}

const DEFAULT_SHOPPING_ITEM = {
  name: "",
  date: new Date().toLocaleString(),
};

const StyledShoppingForm = styled.form<ShoppingFormProps>`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  padding: ${({ noPadding }) => (noPadding ? 0 : "32px 112px")};
`;

const ShoppingForm = ({
  shoppingItem,
  noPadding,
  formType = "ADD",
}: ShoppingFormProps) => {
  const [data, setData] = useState(shoppingItem ?? DEFAULT_SHOPPING_ITEM);
  const [products, setProducts] = useState(productData);

  useEffect(() => {
    if (shoppingItem) setData(shoppingItem);
  }, [shoppingItem]);

  const handleSearch = (value: string) =>
    setProducts(
      productData.filter(({ name }) =>
        name.toLowerCase().includes(value.toLowerCase())
      )
    );

  return (
    <StyledShoppingForm noPadding={noPadding}>
      <Input
        id={`${formType}-name`}
        name={`${formType}-name`}
        placeholder="Nazwa zakupów"
        value={data?.name}
        onChange={(event) => setData({ ...data, name: event.target.value })}
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
            letter-spacing: 0.5px;
            font-weight: 300;
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
          {products.length ? (
            products.map((props, index) => (
              <ProductCheckboxItem key={index} {...props} />
            ))
          ) : (
            <p
              css={css`
                text-align: center;
                padding: 16px;
                font-size: 14px;
                font-weight: 300;
              `}
            >
              Brak przedmiotów
            </p>
          )}
        </div>
      </div>

      <Button fullWidth>Zapisz</Button>
    </StyledShoppingForm>
  );
};

export { ShoppingForm };
