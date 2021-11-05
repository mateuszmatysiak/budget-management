import React from "react";
import { IconProps } from "../types/icon";

const AddIcon = ({
  width = "24px",
  height = "24px",
  fill = "#fff",
  ariaLabelledyBy = "Add icon",
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
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
    </svg>
  );
};

export { AddIcon };
