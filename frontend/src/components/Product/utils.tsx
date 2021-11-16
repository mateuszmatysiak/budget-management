import React from "react";
import { ChartProps } from "react-chartjs-2";
import { CableIcon } from "../../icons/cable";
import { FoodIcon } from "../../icons/food";
import { HomeIcon } from "../../icons/home";
import { IProductHistory, ProductCategoryType } from "../../types/product";

function getProductIcon(category?: ProductCategoryType) {
  switch (category) {
    case "ECONOMIC":
      return <FoodIcon />;
    case "ELECTRONIC":
      return <CableIcon />;
    case "HOMEMADE":
      return <HomeIcon />;
    default:
      return "-";
  }
}

function getProductColor(category?: ProductCategoryType) {
  switch (category) {
    case "ECONOMIC":
      return "linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)";
    case "ELECTRONIC":
      return "linear-gradient(315deg, #2a7246 0%, #0ba852 74%)";
    case "HOMEMADE":
      return "linear-gradient(315deg, #72612a 0%, #e28c0a 74%)";
    default:
      return "-";
  }
}

const getProductChartData = (
  history: IProductHistory[] = []
): ChartProps<"line">["data"] => {
  const values = history?.map(({ price }) => Number(price));
  const labels = history?.map(({ createdAt }) =>
    createdAt ? new Date(createdAt).toLocaleDateString() : "-"
  );

  return {
    labels,
    datasets: [
      {
        label: "W złotówkach",
        data: values,
        borderColor: "rgb(124, 94, 19)",
        pointBackgroundColor: "rgba(255, 206, 86, 1)",
        pointBorderColor: "rgba(255, 206, 86, 1)",
      },
    ],
  };
};

const productChartOptions: ChartProps<"line">["options"] = {
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

export {
  getProductIcon,
  getProductColor,
  getProductChartData,
  productChartOptions,
};
