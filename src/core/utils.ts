
export const generateUrlFromQuerys = (urlRoute: string, queryParams: Record<string, string | number | boolean>) => {
  const apiSecrets = {
    Apikey: import.meta.env.VITE_API_KEY,
    Appid: import.meta.env.VITE_APP_ID,
    organisation_id: import.meta.env.VITE_ORG_ID,
  }
  const urlParams = new URLSearchParams();

  for (const [key, value] of Object.entries(queryParams)) {
    if (value !== undefined && value !== '') {
      urlParams.append(key, value.toString());
    }
  }

  for (const [key, value] of Object.entries(apiSecrets)) {
      urlParams.append(key, value);
  }

  const queryString = urlParams.toString();

  return `${urlRoute}?${queryString}`;
}