/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useSearchHandler } from "../../hooks/useSearchHandler";
import * as mq from "../../styles/media-query";
import { IProduct } from "../../types/product";
import { EmptyState } from "../EmptyState";
import { ProductListItem } from "./ProductListItem";
import { ProductListItemsHeader } from "./ProductListItemsHeader";

interface ProductListItemsProps {
  products?: IProduct[];
}

const ProductListItems = ({ products = [] }: ProductListItemsProps) => {
  const { searchData, handleSearch } = useSearchHandler(products);

  return (
    <div
      aria-label="Lista produktów"
      css={css`
        position: relative;
        flex: 1 1;
        height: 100vh;
        border-right: 1px solid rgba(38, 38, 38, 1);
        background-color: #171717;
        font-size: 14px;

        ${mq.laptop} {
          padding-top: 49px;
        }
      `}
    >
      <ProductListItemsHeader onSearch={handleSearch} />

      <ul
        css={css`
          padding: 120px 12px 12px 12px;
          overflow-y: scroll;
          height: 100%;
        `}
      >
        {searchData.length ? (
          searchData.map((props, index) => (
            <ProductListItem key={index} {...props} />
          ))
        ) : (
          <EmptyState>Nie znaleziono produktu</EmptyState>
        )}
      </ul>
    </div>
  );
};

export { ProductListItems };
