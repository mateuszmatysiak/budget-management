/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { InputHTMLAttributes, ReactNode, SelectHTMLAttributes } from "react";
import { Loader } from "./Loader";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  icon?: ReactNode;
  loading?: boolean;
}

const inputStyles = `
  width: 100%;
  border: 1px solid rgba(229, 229, 229, 0.2);
  border-radius: 5px;
  padding: 16px 42px;
  background-color: #232323;
  color: #e5e5e5;
  outline: none;

  &:focus,
  &:hover {
    box-shadow: 0 0 0 2px #3c81f6;
  }
`;

const searchInputStyles = {
  padding: "16px 24px 16px 42px",
  border: 0,
  borderRadius: 0,
  backgroundColor: "#171717",
  fontSize: "14px",
};

const selectArrowStyles = `
  -webkit-box-sizing: none;
  -moz-box-sizing: none;
  box-sizing: border-box;
  -moz-appearance: none;
  -webkit-appearance: none;

  background-image: linear-gradient(45deg, transparent 50%, rgba(229, 229, 229, 0.5) 50%), linear-gradient(135deg, rgba(229, 229, 229, 0.5) 50%, transparent 50%);
  background-position: calc(100% - 20px) calc(1em + 7px), calc(100% - 15px) calc(1em + 7px);
  background-size: 5px 5px, 5px 5px;
  background-repeat: no-repeat;
`;

const StyledLabel = styled.label`
  position: relative;
  cursor: pointer;

  & > svg,
  div {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 8px;
    fill: ${({ theme }) => theme.color.search};
  }

  & > div {
    margin-left: 12px;
  }
`;

const StyledInput = styled.input<InputProps>`
  ${inputStyles}
  ${({ type }) => (type === "search" ? searchInputStyles : {})};
  ${({ icon }) => (!icon ? { padding: "16px" } : {})};
`;

const StyledSelect = styled.select<SelectProps>`
  ${inputStyles}
  ${selectArrowStyles}
`;

const StyledCheckbox = styled.input<InputProps>`
  position: relative;
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border: ${({ theme }) => `1px solid ${theme.borderColor.tertiary}`};
  border-radius: 1px;
  vertical-align: sub;
  outline: none;
  cursor: pointer;

  &:focus,
  &:hover {
    box-shadow: ${({ theme }) => `0 0 0 2px ${theme.color.secondary}`};
  }

  &:checked {
    background-color: ${({ theme }) => theme.backgroundColor.secondary};
    border-color: ${({ theme }) => theme.borderColor.tertiary};

    &:after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background-image: url("data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==");
      background-size: 40px;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
`;

const Input = (inputProps: InputProps) => {
  return (
    <StyledLabel htmlFor={inputProps.id}>
      {inputProps.icon}
      <StyledInput type="text" {...inputProps} />
    </StyledLabel>
  );
};

const Select = ({ icon, loading, ...selectProps }: SelectProps) => {
  return (
    <StyledLabel htmlFor={selectProps.id}>
      {loading ? <Loader width="16px" height="16px" borderWidth="2px" /> : icon}
      <StyledSelect {...selectProps} />
    </StyledLabel>
  );
};

const Checkbox = (props: InputHTMLAttributes<HTMLInputElement>) => (
  <StyledCheckbox type="checkbox" {...props} />
);

export { Input, Select, Checkbox };
