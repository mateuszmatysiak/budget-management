import { Global, ThemeProvider } from "@emotion/react";
import React, { ReactNode } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyles, theme } from "../utils/theme";
import { AuthProvider } from "./auth-provider";

interface AppProviders {
  children: ReactNode;
}

function AppProviders({ children }: AppProviders) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <Router>
        <AuthProvider>{children}</AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export { AppProviders };
