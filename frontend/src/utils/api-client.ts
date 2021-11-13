const localStorageKey = "__budgetApp_token__";

async function client(
  endpoint: string,
  {
    body,
    customConfig,
  }: { body?: unknown; customConfig?: { method: string } } = {}
) {
  const token = window.localStorage.getItem(localStorageKey);
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
    .then(async (r) => {
      if (r.status === 401) {
        // logout

        window.location.assign("/");
        return Promise.reject({
          message: "Wymagane ponowne uwierzytelnienie.",
        });
      }
      const data = await r.json();
      if (r.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
}

export { client, localStorageKey };
