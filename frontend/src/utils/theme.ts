import { css, Theme } from "@emotion/react";
import emotionReset from "emotion-reset";

const GlobalStyles = css`
  ${emotionReset}

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px #3c81f6;
  }

  *,
  *::after,
  *::before {
    font-family: -apple-system, BlinkMacSystemFont, sans-serif, Open Sans;
    box-sizing: border-box;
    outline: none;
  }
`;

const theme: Theme = {
  backgroundColor: {
    primary: "#050505",
    secondary: "#171717",
    tertiary: "#262626",
    quatenary: "#232323",
    linkHover: "rgba(64, 64, 64, 1)",
  },
  color: {
    primary: "#e5e5e5",
    secondary: "#3c81f6",
    tertiary: "#d4d4d4",
    search: "rgba(229, 229, 229, 0.85)",
    white: "#fff",
    secondaryHover: "#244ee7",
  },
  borderRadius: {
    primary: "5px",
    secondary: "10px",
    tertiary: "15px",
  },
  borderColor: {
    primary: "rgb(38, 38, 38)",
    secondary: "rgba(229, 229, 229, 0.15)",
    tertiary: "rgba(229, 229, 229, 0.5)",
  },
};

export { theme, GlobalStyles };
