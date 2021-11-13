import React from "react";

const TitleIcon = ({
  width = "24px",
  height = "24px",
  fill = "#fff",
  ariaLabelledyBy = "Title icon",
}: IconProps) => {
  return (
    <svg
      aria-labelledby={ariaLabelledyBy}
      viewBox="0 0 24 24"
      height={height}
      width={width}
      fill={fill}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M5 4v3h5.5v12h3V7H19V4z" />
    </svg>
  );
};

export { TitleIcon };
