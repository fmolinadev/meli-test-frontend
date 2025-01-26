/**
 * @author Francisco Molina <franciscomolina.dev@gmail.com>
 */

import { useQuery } from "@tanstack/react-query";
import { fetchItems } from "../services";

export const useGetSearch = (query: string) => {
  return useQuery(["items", query], ({ signal }) => fetchItems(query, signal), {
    enabled: !!query,
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
  });
};
