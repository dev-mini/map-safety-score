const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const cache = new Map();

export const apiClient = (
  url: string,
  requestFn: (url: string) => Promise<unknown>
) => {
  if (!cache.has(url)) {
    cache.set(url, requestFn(`${BASE_URL}${url}`));
  }
  return cache.get(url);
};
