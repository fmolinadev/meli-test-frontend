/**
 * @author Francisco Molina <franciscomolina.dev@gmail.com>
 */

import { axiosService } from "../config";

export const fetchItems = async (query: string, signal?: AbortSignal) => {
  try {
    const response = await axiosService.get({
      path: `?q=${query}`,
      signal,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.message || "Error al obtener los resultados de la búsqueda"
    );
  }
};

export const fetchItemDetails = async (id: string) => {
  try {
    const response = await axiosService.get({
      path: `/${id}`,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.message || "Error al obtener los detalels del producto"
    );
  }
};
