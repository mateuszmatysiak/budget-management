/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Line } from "react-chartjs-2";
import { IProductHistory } from "../../types/product";
import { getProductChartData, productChartOptions } from "./utils";

interface ProductChartProps {
  history?: IProductHistory[];
}

const ProductChart = ({ history }: ProductChartProps) => {
  const data = getProductChartData(history);

  return (
    <div
      css={css`
        padding: 32px 112px;
      `}
    >
      <div
        css={css`
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
            border-bottom: 1px solid rgba(229, 229, 229, 0.2);
            font-size: 14px;
            letter-spacing: 0.5px;
            font-weight: 300;
            background-color: #232323;
          `}
        >
          Ceny produktu
        </div>
        <div
          css={css`
            padding: 16px;
            background-color: #232323;
          `}
        >
          <Line data={data} options={productChartOptions} />
        </div>
      </div>
    </div>
  );
};

export { ProductChart };
