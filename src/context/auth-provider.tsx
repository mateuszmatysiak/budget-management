import React, { ReactNode } from "react";
import { FullPageSpinner } from "../components/Layout/FullPageSpinner";
import * as authClient from "../utils/auth-client";

export interface AuthUser {
  username: string;
  token: string;
}

interface AuthForm {
  username: string;
  password: string;
}

interface AuthContext {
  user?: AuthUser;
  login?: (form: AuthForm) => void;
  register?: (form: AuthForm) => void;
  logout?: () => void;
}

interface AuthProvider {
  children: ReactNode;
}

const AuthContext = React.createContext<AuthContext>({});
AuthContext.displayName = "AuthContext";

async function initialAppData() {
  let user;

  if (authClient.isLoggedIn()) {
    user = await authClient.getUser();
  }

  return user;
}

function AuthProvider({ children }: AuthProvider) {
  const [data, setData] = React.useState<AuthUser | undefined>(undefined);
  const [loading, setLoading] = React.useState(false);

  React.useLayoutEffect(() => {
    setLoading(true);
    initialAppData()
      .then((data) => setData(data))
      .then(() => setLoading(false));
  }, []);

  const login = React.useCallback(
    (form) => authClient.login(form).then((user) => setData(user)),
    [setData]
  );

  const register = React.useCallback(
    (form) => authClient.register(form).then((user) => setData(user)),
    [setData]
  );

  const logout = React.useCallback(() => {
    authClient.logout();
    setData(undefined);
  }, [setData]);

  const value = React.useMemo(
    () => ({ user: data, login, register, logout }),
    [login, logout, register, data]
  );

  if (loading) return <FullPageSpinner />;

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
}

export { AuthProvider, useAuth };
