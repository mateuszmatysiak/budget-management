import React from "react";
import AuthenticatedApp from "./authenticated-app";
import { useAuth } from "./context/auth-provider";
import UnauthenticatedApp from "./unauthenticated-app";

function App() {
  const { user } = useAuth();
  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
}

export default App;
