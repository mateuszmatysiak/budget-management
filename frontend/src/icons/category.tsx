import React from "react";

const CategoryIcon = ({
  width = "24px",
  height = "24px",
  fill = "#fff",
  ariaLabelledyBy = "Category icon",
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
      <path d="M12 2l-5.5 9h11z" />
      <circle cx="17.5" cy="17.5" r="4.5" />
      <path d="M3 13.5h8v8H3z" />
    </svg>
  );
};

export { CategoryIcon };
