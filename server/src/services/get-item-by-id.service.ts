/**
 * @author Francisco Molina <franciscomolina.dev@gmail.com>
 */
import { itemFetcher } from "../config/adapters/item-details";
import { ItemDescription, ItemDetail } from "../infraestructure/interfaces";
import ItemViewDetails from "../infraestructure/interfaces/item.view-details.interface";

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
        picture: productDetail.pictures[0]?.url || "",
        condition: productDetail.condition,
        free_shipping: productDetail.shipping.free_shipping,
        sold_quantity:
          productDetail.initial_quantity - productDetail.base_price,
        description: productDescription.plain_text,
      },
    };

    return combinedResult;
  } catch (error) {
    console.error(error);
    throw new Error(`Ocurrio un error al obtener los detalles del producto.`);
  }
};
