/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { IProduct } from "../../types/product";
import { IShopping } from "../../types/shopping";
import { Checkbox } from "../Input";
import { ProductItem } from "./ProductListItem";

interface ProductListCheckboxItemProps {
  formData: IShopping;
  setFormData: (item: IShopping) => void;
  product: IProduct;
}

const ProductListCheckboxItem = ({
  formData,
  setFormData,
  product,
}: ProductListCheckboxItemProps) => {
  const checked = formData.products?.some((item) => item.id === product.id);

  const add = (product: IProduct) => () =>
    setFormData({
      ...formData,
      products: [...formData.products, product],
    });

  const remove = (product: IProduct) => () =>
    setFormData({
      ...formData,
      products: formData.products?.filter((item) => item.id !== product.id),
    });

  const toggle = checked ? remove(product) : add(product);

  return (
    <div
      onClick={toggle}
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px;
        cursor: pointer;
        border-radius: 5px;

        &:not(:last-child) {
          margin-bottom: 4px;
        }

        &:hover {
          background-color: rgba(64, 64, 64, 1);
        }
      `}
    >
      <div
        css={css`
          display: flex;
        `}
      >
        <ProductItem product={product} />
      </div>

      <Checkbox
        id={`checkbox-${product.id}`}
        name={`checkbox-${product.id}`}
        checked={checked}
        onChange={toggle}
      />
    </div>
  );
};

export { ProductListCheckboxItem };
