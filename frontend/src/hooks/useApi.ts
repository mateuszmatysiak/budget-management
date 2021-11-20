import { useAuth0 } from "@auth0/auth0-react";
import useSWR from "swr";
import { client } from "../utils/api-client";

function useApi<T>(
  endpoint: string,
  config: { body?: unknown; method?: string } = {}
) {
  const { getAccessTokenSilently, isAuthenticated, isLoading, logout } =
    useAuth0();

  return useSWR<T>(
    isLoading || !isAuthenticated ? null : endpoint,
    async (url: string) => {
      const accessToken = await getAccessTokenSilently();

      return await client(url, { ...config, token: accessToken, logout });
    },
    {
      revalidateOnFocus: false,
    }
  );
}

function useClient() {
  const { getAccessTokenSilently, logout } = useAuth0();

  return async (
    endpoint: string,
    config: { body?: unknown; method?: string } = {}
  ) => {
    const accessToken = await getAccessTokenSilently();

    return await client(endpoint, { ...config, token: accessToken, logout });
  };
}

export { useApi, useClient };
