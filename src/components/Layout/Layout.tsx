import styled from "@emotion/styled";
import React, { ReactNode } from "react";
import { Navigation } from "./Navigation";

interface LayoutProps {
  children: ReactNode;
}

const StyledMain = styled.main`
  display: flex;
  height: 100vh;
  background-color: rgb(5, 5, 5);
`;

const Content = styled.section`
  display: flex;
  width: 82.5%;
  min-height: 100vh;
  background-image: radial-gradient(rgba(38, 38, 38, 0.75) 1px, transparent 0);
  background-size: 16px 16px;
`;

const Layout = ({ children }: LayoutProps) => {
  return (
    <StyledMain>
      <Navigation />

      <Content>{children}</Content>
    </StyledMain>
  );
};

export { Layout };
