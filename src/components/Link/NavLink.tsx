import styled from "@emotion/styled";
import { NavLink as ReactRouterNavLink } from "react-router-dom";

const NavLink = styled(ReactRouterNavLink)`
  position: relative;
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 5px;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.color.primary};
  text-decoration: none;
  transition: background-color 0.25s;
  letter-spacing: 0.3px;

  & > svg {
    margin-right: 12px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.backgroundColor.linkHover};
  }

  &.active {
    background-color: ${({ theme }) => theme.backgroundColor.linkHover};
  }
`;

export { NavLink };
