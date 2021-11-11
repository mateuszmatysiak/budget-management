import React from "react";
import { IconProps } from "../types/icon";

const HomeIcon = ({
  width = "24px",
  height = "24px",
  fill = "#fff",
  ariaLabelledyBy = "Home icon",
}: IconProps) => {
  return (
    <svg
      aria-labelledby={ariaLabelledyBy}
      viewBox="0 0 24 24"
      height={height}
      width={width}
      fill={fill}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
  );
};

export { HomeIcon };
