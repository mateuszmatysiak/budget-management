import { AuthUser } from "../context/auth-provider";
import { client, localStorageKey } from "./api-client";

interface UserBody {
  username: string;
  password: string;
}

function getUser() {
  const token = getToken();

  if (!token) {
    return Promise.resolve(null);
  }
  return client("user").then((data) => data);
}

function handleUserResponse(user: AuthUser) {
  window.localStorage.setItem(localStorageKey, user.token);
  return user;
}

function login({ username, password }: UserBody) {
  return client("login", { body: { username, password } }).then(
    handleUserResponse
  );
}

function register({ username, password }: UserBody) {
  return client("register", { body: { username, password } }).then(
    handleUserResponse
  );
}

function logout() {
  window.localStorage.removeItem(localStorageKey);
}

function getToken() {
  return window.localStorage.getItem(localStorageKey);
}

function isLoggedIn() {
  return Boolean(getToken());
}

export { login, register, logout, isLoggedIn, getUser };
