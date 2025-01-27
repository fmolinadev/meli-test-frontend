import { ItemDetails } from "../../../interface";
import { priceFormatter } from "../../../utils";
import styles from "./favourite-item.module.scss";

interface Props {
  item: ItemDetails;
}

export const FavouriteItem = ({ item }: Props) => {
  return (
    <article
      aria-label={`Artículo en favoritos: ${
        item.title
      }, precio ${priceFormatter(item.price.amount)}${
        item.free_shipping ? ", con envío gratis" : ""
      }`}
      className={styles["favourite-collect-container"]}
    >
      <span aria-label="Este producto está en tus favoritos">
        En tus favoritos:
      </span>
      <h2 aria-label={`Título del producto: ${item.title}`}>{item.title}</h2>
      <figure>
        <img src={item.cover} alt={`Imagen del producto: ${item.title}`} />
      </figure>
      <p
        aria-label={`Precio del producto: ${priceFormatter(item.price.amount)}`}
        className={styles["price"]}
      >
        ${priceFormatter(item.price.amount)}
      </p>
      {item.free_shipping ? (
        <p
          aria-label="Este producto tiene envío gratis"
          className={styles["shipping"]}
        >
          Envío gratis
        </p>
      ) : null}
    </article>
  );
};
