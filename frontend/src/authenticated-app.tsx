import styled from "@emotion/styled";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes } from "react-router-dom";
import { FullPageError } from "./components/Error";
import { Sidebar } from "./components/Sidebar";
import * as mq from "./styles/media-query";
import CalendarView from "./views/calendar";
import NotFoundView from "./views/not-found";
import ProductsView from "./views/products";
import ShoppingView from "./views/shopping";
import StatisticsView from "./views/statistics";

const StyledMain = styled.main`
  display: flex;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.backgroundColor.primary};
`;

const StyledContent = styled.div`
  display: flex;
  width: 82.5%;
  min-height: 100vh;
  background-image: radial-gradient(rgba(38, 38, 38, 0.75) 1px, transparent 0);
  background-size: 16px 16px;

  ${mq.laptop} {
    width: 100%;
  }
`;

function AuthenticatedApp() {
  return (
    <ErrorBoundary FallbackComponent={FullPageError}>
      <StyledMain>
        <Sidebar />

        <StyledContent>
          <ErrorBoundary FallbackComponent={FullPageError}>
            <Routes>
              <Route path="kalendarz" element={<CalendarView />} />
              <Route path="statystyki" element={<StatisticsView />} />
              <Route path="zakupy/*" element={<ShoppingView />} />
              <Route path="produkty/*" element={<ProductsView />} />
              <Route path="*" element={<NotFoundView />} />
            </Routes>
          </ErrorBoundary>
        </StyledContent>
      </StyledMain>
    </ErrorBoundary>
  );
}

export default AuthenticatedApp;
