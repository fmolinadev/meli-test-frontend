/**
 * @author Francisco Molina <franciscomolina.dev@gmail.com>
 */
import { categoriesFetcher } from "../config/adapters/categories/categories.adapter";
import { itemFetcher } from "../config/adapters/item-details";
import { resultFetcher } from "../config/adapters/result";
import {
  SearchResults,
  SearchResponse,
  Category,
  ItemDetail,
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

    const ids = response.results.map((result) => result.id);
    const picture = await Promise.all(
      ids.map(async (id) => {
        const itemDetail = await itemFetcher.get<ItemDetail>(`/${id}`);
        return itemDetail?.pictures?.[0]?.url || "";
      })
    );

    const responseSearch: SearchResponse = {
      author: {
        name: "Francisco",
        lastname: "Molina",
      },
      categories: categories,
      items: response.results.map((result, index) => ({
        id: result.id,
        title: result.title,
        store: result.official_store_name,
        price: {
          currency: result.currency_id,
          amount: result.price,
          decimals: result.price.toString().split(".")[1]?.length || 0,
          original_price: result.original_price,
          discount: result.sale_price.metadata.campaign_discount_percentage,
        },
        thumbnail: result.thumbnail,
        cover: picture[index],
        condition: result.condition,
        free_shipping: result.shipping?.free_shipping || false,
        location: {
          city: result.address.city_name,
          state: result.address.state_name,
        },
      })),
    };

    return responseSearch;
  } catch (error) {
    console.error(error);
    throw new Error(`Error al realizar la búsqueda. Intentelo nuevamente.`);
  }
};
