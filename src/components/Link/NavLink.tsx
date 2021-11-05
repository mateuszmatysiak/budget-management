import styled from "@emotion/styled";
import { NavLink as ReactRouterNavLink } from "react-router-dom";

const NavLink = styled(ReactRouterNavLink)`
  position: relative;
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 5px;
  margin-bottom: 4px;
  color: #e5e5e5;
  text-decoration: none;
  transition: background-color 0.25s;
  letter-spacing: 0.3px;

  & > svg {
    margin-right: 12px;
  }

  &:hover {
    background-color: rgba(64, 64, 64, 1);
  }

  &.active {
    background-color: rgba(64, 64, 64, 1);
  }
`;

export { NavLink };
