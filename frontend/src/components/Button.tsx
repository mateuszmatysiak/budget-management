import styled from "@emotion/styled";
import { ReactNode } from "react";
import React from "react";
import { Loader } from "./Loader";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  children: ReactNode;
}

interface LoadingButtonProps extends ButtonProps {
  loading: boolean;
}

const Button = styled.button<ButtonProps>`
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "unset")};
  padding: 12px;
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  background-color: ${({ theme }) => theme.color.secondary};
  color: ${({ theme }) => theme.color.white};
  transition: background-color 0.5s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.secondaryHover};
  }

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  & > a {
    display: block;
    height: 100%;
    padding: 8px;
    color: ${({ theme }) => theme.color.white};
    text-decoration: none;
  }
`;

const LoadingButton = ({ children, loading, ...props }: LoadingButtonProps) => {
  return (
    <Button {...props} disabled={loading}>
      {!loading ? (
        children
      ) : (
        <Loader width="16px" height="16px" borderWidth="2px" />
      )}
    </Button>
  );
};

const UserButton = styled.button`
  width: 100%;
  padding: 8px;
  background-color: unset;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  text-align: left;

  &:hover {
    background-color: ${({ theme }) => theme.backgroundColor.linkHover};
  }
`;

export { Button, LoadingButton, UserButton };
