import React from "react";
import { IconProps } from "../types/icon";

const LineChartIcon = ({
  width = "24px",
  height = "24px",
  fill = "#e5e5e5",
  ariaLabelledyBy = "LineChart icon",
}: IconProps) => {
  return (
    <svg
      aria-labelledby={ariaLabelledyBy}
      height={height}
      viewBox="0 0 24 24"
      width={width}
      fill={fill}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99l1.5 1.5z" />
    </svg>
  );
};

export { LineChartIcon };
