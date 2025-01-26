/**
 * @author Francisco Molina <franciscomolina.dev@gmail.com>
 */

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchItems = async (query: string, signal?: AbortSignal) => {
  const response = await fetch(`${BASE_URL}?q=${query}`, { signal });
  if (!response.ok) {
    throw new Error("Error fetching items");
  }
  return response.json();
};
