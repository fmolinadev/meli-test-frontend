import { useState } from "react";
import { ItemViewDetails } from "../../../interface";
import { priceFormatter } from "../../../utils";
import { ActionButton } from "../../shared";
import styles from "./item-detail.module.scss";
import { ThumbnailGallery } from "../ThumbnailGallery";

interface Props {
  detail: ItemViewDetails;
}

export const DetailItem = ({ detail }: Props) => {
  const [currentCover, setCurrentCover] = useState<string>(detail.item.cover);

  return (
    <section className={styles["details-container"]}>
      <div>
        <div className={styles["details-gallery"]}>
          <ThumbnailGallery
            pictures={detail.item.pictures}
            onHover={(url) => setCurrentCover(url)}
          />
          <figure>
            <img
              src={currentCover}
              className={styles["current-img"]}
              alt={`Foto de producto de: ${detail.item.title}`}
            />
          </figure>
        </div>
        <h3>Descripción del producto</h3>
        <p>{detail.item.description}</p>
      </div>
      <div>
        <div className={styles["details-price-info"]}>
          <p>status etc</p>
          <h3>{detail.item.title}</h3>
          <span>${priceFormatter(detail.item.price.amount)}</span>
        </div>
        <ActionButton onClick={() => alert("Comprar")} text="Comprar" />
      </div>
    </section>
  );
};
