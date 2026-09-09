const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const cache = new Map<string, Promise<unknown>>();
const listeners = new Map<string, Set<() => void>>();

function get<T>(url: string): Promise<T> {
  if (!cache.has(url)) {
    cache.set(
      url,
      fetch(`${BASE_URL}${url}`).then(r => r.json())
    );
  }
  return cache.get(url) as Promise<T>;
}

async function post<T>(url: string, body: unknown): Promise<T> {
  const res = await fetch(`${BASE_URL}${url}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return res.json();
}

function invalidate(url: string) {
  cache.delete(url);
  listeners.get(url)?.forEach(fn => fn());
}

function subscribe(url: string, listener: () => void) {
  if (!listeners.has(url)) listeners.set(url, new Set());
  listeners.get(url)!.add(listener);
  return () => listeners.get(url)?.delete(listener);
}

export const apiClient = { get, post, invalidate, subscribe };
