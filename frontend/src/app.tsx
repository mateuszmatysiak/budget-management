import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import AuthenticatedApp from "./authenticated-app";
import { FullPageLoader } from "./components/Loader";
import UnauthenticatedApp from "./unauthenticated-app";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <FullPageLoader />;

  return isAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />;
}

export default App;
