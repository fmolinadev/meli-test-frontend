import { Items } from "../../../interface";
import { priceFormatter, roundPercentage } from "../../../utils";
import styles from "./item.module.scss";
interface Props {
  item: Items;
}

export const Item = ({ item }: Props) => {
  return (
    <article className={styles["item-container"]}>
      <figure>
        <img
          className={styles["cover"]}
          src={item.cover}
          alt={`Imagen de ${item.title}`}
        />
      </figure>
      <div className={styles["position-items"]}>
        <div>
          <div className={styles["head-item"]}>
            <h3 aria-label={`Producto: ${item.title}`}>{item.title}</h3>
            <span aria-label={`Tienda: ${item.store}`}>
              {item.store ? `Por: ${item.store}` : null}
            </span>
          </div>
          <div>
            <div className={styles["price_containers"]}>
              <p
                className={styles["old-price"]}
                aria-label={`Precio anterior: ${
                  item.price.original_price ?? "No disponible"
                }`}
              >
                {item.price.original_price
                  ? `$${priceFormatter(item.price.original_price)}`
                  : null}
              </p>
              <div className={styles["current_price"]}>
                <p
                  aria-label={`Precio actual: ${item.price.amount}${
                    item.price.decimals ? `.${item.price.decimals}` : ""
                  } pesos`}
                >
                  ${priceFormatter(item.price.amount)}
                  {item.price.decimals > 0 ? item.price.decimals : null}
                </p>
                <span
                  aria-label={`Descuento: ${
                    item.price.discount
                      ? `.${roundPercentage(item.price.discount)} por ciento`
                      : "Sin descuentos"
                  } `}
                >
                  {item.price.discount
                    ? `${roundPercentage(item.price.discount)}% OFF`
                    : null}
                </span>
              </div>
            </div>
            <div
              aria-label={`Estado de envío: ${
                item.free_shipping
                  ? "Envío gratuito"
                  : "Costo adicional por envío"
              }`}
            >
              {item.free_shipping ? (
                <p className={styles["free_shipping"]}>Envío gratis</p>
              ) : null}
            </div>
          </div>
        </div>
        <div>
          <span
            className={styles["state-of-seller"]}
            aria-label={`Ubicación del comerciante: ${item.location.state}`}
          >
            {item.location.state}
          </span>
        </div>
      </div>
    </article>
  );
};
