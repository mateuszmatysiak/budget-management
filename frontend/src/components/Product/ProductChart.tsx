/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { ChartProps, Line } from "react-chartjs-2";

const data: ChartProps<"line">["data"] = {
  labels: [
    "09-09-2021",
    "01-10-2021",
    "11-11-2021",
    "12-11-2021",
    "13-11-2021",
  ],
  datasets: [
    {
      label: "W złotówkach",
      data: [5.51, 5.79, 5.81, 5.99, 6.01],
      borderColor: "rgb(124, 94, 19)",
      pointBackgroundColor: "rgba(255, 206, 86, 1)",
      pointBorderColor: "rgba(255, 206, 86, 1)",
    },
  ],
};

const options: ChartProps<"line">["options"] = {
  responsive: true,
  scales: {
    xAxes: {
      grid: {
        color: "rgba(229, 229, 229, 0.2)",
      },
    },
    yAxes: {
      grid: {
        color: "rgba(229, 229, 229, 0.2)",
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};

const ProductChart = () => {
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
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export { ProductChart };
