import React from "react";

const ProductIcon = ({
  width = "16px",
  height = "16px",
  fill = "#e5e5e5",
  ariaLabelledyBy = "Product icon",
}: IconProps) => {
  return (
    <svg
      aria-labelledby={ariaLabelledyBy}
      viewBox="0 0 24 24"
      height={height}
      width={width}
      fill={fill}
    >
      <g>
        <rect fill="none" height="24" width="24" />
      </g>
      <g>
        <path d="M20,2H4C3,2,2,2.9,2,4v3.01C2,7.73,2.43,8.35,3,8.7V20c0,1.1,1.1,2,2,2h14c0.9,0,2-0.9,2-2V8.7c0.57-0.35,1-0.97,1-1.69V4 C22,2.9,21,2,20,2z M15,14H9v-2h6V14z M20,7H4V4h16V7z" />
      </g>
    </svg>
  );
};

export { ProductIcon };
