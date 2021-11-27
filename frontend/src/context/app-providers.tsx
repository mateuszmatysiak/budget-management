import "react-toastify/dist/ReactToastify.css";
import { Global, ThemeProvider } from "@emotion/react";
import React, { ReactNode } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { SWRConfig } from "swr";
import { GlobalStyles, theme } from "../styles/theme";
import Auth0ProviderWithHistory from "./auth0-provider-with-history";

interface AppProviders {
  children: ReactNode;
}

function AppProviders({ children }: AppProviders) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />

      <Router>
        <Auth0ProviderWithHistory>
          <SWRConfig>
            {children}
            <ToastContainer
              position="top-right"
              autoClose={1500}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </SWRConfig>
        </Auth0ProviderWithHistory>
      </Router>
    </ThemeProvider>
  );
}

export { AppProviders };
