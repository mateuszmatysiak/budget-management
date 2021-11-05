import { css, Global } from "@emotion/react";
import emotionReset from "emotion-reset";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import CalendarView from "./views/calendar";
import ProductsView from "./views/products";
import ShoppingView from "./views/shopping";
import StatisticsView from "./views/statistics";

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

  *,
  *::after,
  *::before {
    font-family: -apple-system, BlinkMacSystemFont, sans-serif, Open Sans;
    box-sizing: border-box;
    outline-color: #e5e5e5;
  }
`;

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Router>
        <Switch>
          <Layout>
            <Route path="/kalendarz">
              <CalendarView />
            </Route>
            <Route path="/statystyki">
              <StatisticsView />
            </Route>
            <Route path="/zakupy">
              <ShoppingView />
            </Route>
            <Route path="/produkty">
              <ProductsView />
            </Route>
          </Layout>
        </Switch>
      </Router>
    </>
  );
}

export default App;
