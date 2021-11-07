import styled from "@emotion/styled";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Layout/Navigation";
import { NotFoundScreen } from "./components/Layout/NotFoundScreen";
import CalendarView from "./views/calendar";
import ProductsView from "./views/products";
import ShoppingView from "./views/shopping";
import StatisticsView from "./views/statistics";

const StyledMain = styled.main`
  display: flex;
  height: 100vh;
  background-color: ${({ theme }) => theme.backgroundColor.primary};
`;

const Content = styled.section`
  display: flex;
  width: 82.5%;
  min-height: 100vh;
  background-image: radial-gradient(rgba(38, 38, 38, 0.75) 1px, transparent 0);
  background-size: 16px 16px;
`;

function AuthenticatedApp() {
  return (
    <StyledMain>
      <Navigation />

      <Content>
        <Routes>
          <Route path="kalendarz" element={<CalendarView />} />
          <Route path="statystyki" element={<StatisticsView />} />
          <Route path="zakupy/*" element={<ShoppingView />} />
          <Route path="produkty/*" element={<ProductsView />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </Content>
    </StyledMain>
  );
}

export default AuthenticatedApp;
