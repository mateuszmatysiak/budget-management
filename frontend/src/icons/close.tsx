import React from "react";

const CloseIcon = ({
  width = "16px",
  height = "16px",
  fill = "#fff",
  ariaLabelledyBy = "Close icon",
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
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
    </svg>
  );
};

export { CloseIcon };
