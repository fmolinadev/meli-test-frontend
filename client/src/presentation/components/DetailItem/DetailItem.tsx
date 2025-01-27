import { useEffect, useState } from "react";
import { toast } from "sonner";
import { ItemViewDetails } from "../../../interface";
import { priceFormatter } from "../../../utils";
import { ActionButton } from "../../shared";
import { ThumbnailGallery } from "../ThumbnailGallery";
import { AtributesCollections } from "../AtributesCollection";
import { ConditionsEnum } from "../../../enums";
import { useFavouritesContext } from "../../../context";
import { HeartFilledIcon, HeartUnfilledIcon } from "../../../assets";
import styles from "./item-detail.module.scss";

interface Props {
  detail: ItemViewDetails;
}

export const DetailItem = ({ detail }: Props) => {
  const { addToFavourites, removeFromFavourites, favourites } =
    useFavouritesContext();
  const [currentCover, setCurrentCover] = useState<string>(detail.item.cover);

  const [isInFavourites, setIsInFavourites] = useState<boolean>(true);

  useEffect(() => {
    const isFavourite = favourites.some((fav) => fav.id === detail.item.id);
    setIsInFavourites(isFavourite);
  }, [detail.item.id, favourites]);

  const handleAddToFavourites = () => {
    addToFavourites(detail.item);
    setIsInFavourites(true);
    toast("Producto agregado a favoritos!");
  };

  const handleRemoteToFavourites = () => {
    removeFromFavourites(detail.item.id);
    setIsInFavourites(false);
    toast("Producto quitado de favoritos!");
  };

  return (
    <section className={styles["details-container"]}>
      <div>
        <div className={styles["details-gallery"]}>
          {detail.item.pictures.length > 0 && (
            <ThumbnailGallery
              pictures={detail.item.pictures}
              onHover={(url) => setCurrentCover(url)}
            />
          )}

          <figure>
            <img
              src={currentCover}
              className={styles["current-img"]}
              alt={`Foto de producto de: ${detail.item.title}`}
              aria-label={`Foto de producto de: ${detail.item.title}`}
            />
          </figure>
        </div>
        <h4 className={styles["details-section-title"]}>
          Descripción del producto
        </h4>
        <p
          aria-label={`${
            detail.item.description
              ? "Descripción del producto: " + detail.item.description
              : "No hay descripción para este producto."
          }`}
        >
          {detail.item.description
            ? detail.item.description
            : "No hay descripción para este producto."}
        </p>
        <h4 className={styles["details-section-title"]}>
          Características del producto:{" "}
        </h4>
        {detail.item.atributes.length > 0 ? (
          <AtributesCollections atributes={detail.item.atributes} />
        ) : (
          "No hay características para mostrar de este producto."
        )}
      </div>
      <div className={`${styles["details-placement"]}`}>
        <div className={styles["details-price-info"]}>
          <div className={styles["details-status-container"]}>
            <div className={styles["details-status-info"]}>
              <p
                aria-label={`Este es un producto ${
                  ConditionsEnum[
                    detail.item.condition as keyof typeof ConditionsEnum
                  ]
                }`}
              >
                {detail.item.condition
                  ? ConditionsEnum[
                      detail.item.condition as keyof typeof ConditionsEnum
                    ]
                  : null}
              </p>
              <p aria-label={`${detail.item.sold_quantity} productos vendidos`}>
                {detail.item.sold_quantity
                  ? ` - ${detail.item.sold_quantity} vendidos`
                  : null}
              </p>
            </div>
            <div>
              <button
                className={styles["button-favourites"]}
                aria-label="Boton accionar de favoritos"
                onClick={
                  isInFavourites
                    ? handleRemoteToFavourites
                    : handleAddToFavourites
                }
              >
                {isInFavourites ? (
                  <HeartFilledIcon height={24} />
                ) : (
                  <HeartUnfilledIcon height={24} />
                )}
              </button>
            </div>
          </div>

          <h3 aria-label={`Producto: ${detail.item.title}`}>
            {detail.item.title}
          </h3>
          <span aria-label={`Precio: ${detail.item.price.amount}`}>
            ${priceFormatter(detail.item.price.amount)}
          </span>
        </div>
        <ActionButton
          onClick={() => toast("Este producto te llegará a tu casa con éxito!")}
          text="Comprar"
        />
      </div>
    </section>
  );
};
