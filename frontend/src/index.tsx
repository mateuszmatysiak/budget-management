import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { AppProviders } from "./context/app-providers";
import { worker } from "./mocks/browser";

if (process.env.NODE_ENV === "development") {
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>,
  document.getElementById("root")
);
