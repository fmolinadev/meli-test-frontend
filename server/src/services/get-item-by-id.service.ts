/**
 * @author Francisco Molina <franciscomolina.dev@gmail.com>
 */
import { itemFetcher } from "../config/adapters/item-details";
import {
  ItemDescription,
  ItemDetail,
  ItemViewDetails,
} from "../infraestructure/interfaces";
import { getPictureUrls } from "../utils";
import { getAttributesAsArray } from "../utils/get-atributes.util";

export const getItemByIdService = async (id: string) => {
  try {
    const [productDetail, productDescription] = await Promise.all([
      itemFetcher.get<ItemDetail>(`/${id}`),
      itemFetcher.get<ItemDescription>(`/${id}/description`),
    ]);

    const combinedResult: ItemViewDetails = {
      author: {
        name: "Francisco",
        lastname: "Molina",
      },
      item: {
        id: productDetail.id,
        title: productDetail.title,
        price: {
          currency: productDetail.currency_id,
          amount: Math.floor(productDetail.price),
          decimals:
            productDetail.price % 1 !== 0
              ? Number((productDetail.price % 1).toFixed(2))
              : 0,
        },
        pictures: getPictureUrls(productDetail.pictures),
        cover: productDetail.pictures[0]?.url || "",
        condition: productDetail.condition,
        atributes: getAttributesAsArray(productDetail.attributes),
        free_shipping: productDetail.shipping.free_shipping,
        sold_quantity: productDetail.initial_quantity,
        description: productDescription.plain_text,
      },
    };
    return combinedResult;
  } catch (error: any) {
    console.error(error);
    throw new Error(
      error.message || "Ocurrió un error al obtener los detalles del producto."
    );
  }
};
