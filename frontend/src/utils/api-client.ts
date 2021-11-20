import { LogoutOptions } from "@auth0/auth0-react";

interface ClientConfigProps {
  body?: unknown;
  method?: string;
  token?: string;
  logout?: (options?: LogoutOptions) => void;
}

function client(
  endpoint: string,
  { token, logout, body, ...customConfig }: ClientConfigProps
) {
  const headers: HeadersInit = { "content-type": "application/json" };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  const config: RequestInit = {
    method: body ? "POST" : "GET",
    ...customConfig,
    headers: {
      ...headers,
    },
  };
  if (body) {
    config.body = JSON.stringify(body);
  }

  return window
    .fetch(`${process.env.REACT_APP_API_URL}/${endpoint}`, config)
    .then(async (res) => {
      if (res.status === 401) {
        logout?.({
          returnTo: window.location.origin,
        });
      }

      const data = await res.json();
      if (res.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
}

export { client };
