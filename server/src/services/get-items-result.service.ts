/**
 * @author Francisco Molina <franciscomolina.dev@gmail.com>
 */
import { categoriesFetcher } from "../config/adapters/categories/categories.adapter";
import { resultFetcher } from "../config/adapters/result";
import {
  SearchResults,
  SearchResponse,
  Category,
} from "../infraestructure/interfaces";

import { getCategoryFromId } from "../utils";

export const getItemsResultService = async (query: string) => {
  try {
    const response = await resultFetcher.get<SearchResults>(
      `/search?q=${query}&limit=4`
    );
    let categories: string[] = [];

    if (response.filters.length) {
      const { path_from_root } = response.filters[0].values[0];
      categories = path_from_root.map((category) => category.name);
    } else {
      const categoriesId = getCategoryFromId(response.available_filters);
      const responseCategories = await categoriesFetcher.get<Category[]>(
        `/${categoriesId}`
      );
      categories = responseCategories.map((category) => category.name);
    }

    const responseSearch: SearchResponse = {
      author: {
        name: "Francisco",
        lastname: "Molina",
      },
      categories: categories,
      items: response.results.map((result) => ({
        id: result.id,
        title: result.title,
        price: {
          currency: result.currency_id,
          amount: result.price,
          decimals: result.price.toString().split(".")[1]?.length || 0,
        },
        picture: result.thumbnail,
        condition: result.condition,
        free_shipping: result.shipping?.free_shipping || false,
      })),
    };

    return responseSearch;
  } catch (error) {
    console.error(error);
    throw new Error(`Error al realizar la búsqueda. Intentelo nuevamente.`);
  }
};
