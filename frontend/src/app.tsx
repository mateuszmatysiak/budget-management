import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { FullPageError } from "./components/Error";
import { FullPageLoader } from "./components/Loader";

const AuthenticatedApp = React.lazy(
  () => import(/* webpackPrefetch: true */ "./authenticated-app")
);
const UnauthenticatedApp = React.lazy(() => import("./unauthenticated-app"));

function App() {
  const { isAuthenticated, isLoading, error } = useAuth0();

  if (isLoading) return <FullPageLoader />;

  if (error) return <FullPageError error={error} />;

  return (
    <React.Suspense fallback={<FullPageLoader />}>
      {isAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </React.Suspense>
  );
}

export default App;
