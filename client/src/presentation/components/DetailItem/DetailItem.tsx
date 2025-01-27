import { useState } from "react";
import { ItemViewDetails } from "../../../interface";
import { priceFormatter } from "../../../utils";
import { ActionButton } from "../../shared";
import { ThumbnailGallery } from "../ThumbnailGallery";
import { AtributesCollections } from "../AtributesCollection";
import { ConditionsEnum } from "../../../enums";
import styles from "./item-detail.module.scss";

interface Props {
  detail: ItemViewDetails;
}

export const DetailItem = ({ detail }: Props) => {
  const [currentCover, setCurrentCover] = useState<string>(detail.item.cover);

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
          <div className={styles["details-status-info"]}>
            <p>
              {detail.item.condition
                ? ConditionsEnum[
                    detail.item.condition as keyof typeof ConditionsEnum
                  ]
                : null}
            </p>
            <p>
              {detail.item.sold_quantity
                ? ` - ${detail.item.sold_quantity} vendidos`
                : null}
            </p>
          </div>

          <h3>{detail.item.title}</h3>
          <span>${priceFormatter(detail.item.price.amount)}</span>
        </div>
        <ActionButton onClick={() => alert("Comprar")} text="Comprar" />
      </div>
    </section>
  );
};
