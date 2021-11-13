import { AppState, Auth0Provider } from "@auth0/auth0-react";
import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface Auth0ProviderWithHistoryProps {
  children: ReactNode;
}

const Auth0ProviderWithHistory = ({
  children,
}: Auth0ProviderWithHistoryProps) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  const navigate = useNavigate();

  const onRedirectCallback = (appState: AppState) => {
    navigate(appState?.returnTo ?? "kalendarz" ?? window.location.pathname);
  };

  if (!domain || !clientId) return null;

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
