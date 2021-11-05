import styled from "@emotion/styled";

interface ButtonProps {
  fullWidth?: boolean;
}

const Button = styled.button<ButtonProps>`
  padding: 12px;
  border: 0;
  border-radius: 5px;
  background-color: #3c81f6;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.5s;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "unset")};

  &:hover {
    background-color: #244ee7;
  }

  & > a {
    display: block;
    color: #fff;
    text-decoration: none;
    height: 100%;
    padding: 8px;
  }
`;

export { Button };
