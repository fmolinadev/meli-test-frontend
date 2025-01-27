/**
 * @author Francisco Molina <franciscomolina.dev@gmail.com>
 */

import { useQuery } from "@tanstack/react-query";
import { fetchItemDetails, fetchItems } from "../services";

export const useGetSearch = (query: string) => {
  return useQuery(["items", query], ({ signal }) => fetchItems(query, signal), {
    enabled: !!query,
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
  });
};

export const useItemDetails = (id: string | undefined) => {
  return useQuery(["itemDetails", id], () => fetchItemDetails(id), {
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
  });
};
