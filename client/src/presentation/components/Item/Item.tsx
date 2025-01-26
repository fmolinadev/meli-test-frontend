import { Items } from "../../../interface";

interface Props {
  item: Items;
}

export const Item = ({ item }: Props) => {
  return (
    <article>
      <figure>
        <img src={item.picture} alt={`Imagen de ${item.title}`} />
      </figure>
      <div>
        <div>
          <h3 aria-label={`Producto: ${item.title}`}>{item.title}</h3>
          <span aria-label={`Tienda: ${item.store}`}>{item.store}</span>
        </div>
        <div>
          <div>
            <p
              aria-label={`Precio anterior: ${
                item.price.original_price ?? "No disponible"
              }`}
            >
              {item.price.original_price
                ? `$${item.price.original_price}`
                : null}
            </p>
            <p aria-label={`Moneda: ${item.price.currency}`}>
              {item.price.currency}
            </p>
            <p
              aria-label={`Precio actual: ${item.price.amount}${
                item.price.decimals ? `.${item.price.decimals}` : ""
              } pesos`}
            >
              ${item.price.amount}
              {item.price.decimals ?? ""}
            </p>
          </div>
          <div
            aria-label={`Estado de envío: ${
              item.free_shipping
                ? "Envío gratuito"
                : "Costo adicional por envío"
            }`}
          >
            {item.free_shipping ? (
              <p>Envío gratis</p>
            ) : (
              <p>Con costo de envío</p>
            )}
          </div>
        </div>
        <div>
          <span
            aria-label={`Ubicación del comerciante: ${item.location.state}`}
          >
            {item.location.state}
          </span>
        </div>
      </div>
    </article>
  );
};
