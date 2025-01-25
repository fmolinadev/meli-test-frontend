/**
 * @author Francisco Molina <franciscomolina.dev@gmail.com>
 */
import { resultFetcher } from "../config/adapters/result";
import { SearchResults } from "../infraestructure/interfaces";
export const getItemsResultService = async (query: string) => {
  try {
    const response = await resultFetcher.get<SearchResults>(
      `/search?q=${query}&limit=4`
    );
    return response.results;
  } catch (error) {
    console.error(error);
    throw new Error(`Error al realizar la búsqueda. Intentelo nuevamente.`);
  }
};
