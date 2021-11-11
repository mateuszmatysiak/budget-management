import { Global, ThemeProvider } from "@emotion/react";
import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyles, theme } from "../utils/theme";
import Auth0ProviderWithHistory from "./auth0-provider-with-history";

interface AppProviders {
  children: ReactNode;
}

const queryClient = new QueryClient();

function AppProviders({ children }: AppProviders) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <Router>
        <Auth0ProviderWithHistory>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </Auth0ProviderWithHistory>
      </Router>
    </ThemeProvider>
  );
}

export { AppProviders };
