import React from "react";
import styles from "./thumbnail-gallery.module.scss";

interface ThumbnailGalleryProps {
  pictures: string[];
  onHover: (url: string) => void;
}

export const ThumbnailGallery: React.FC<ThumbnailGalleryProps> = ({
  pictures,
  onHover,
}) => {
  return (
    <div className={styles["thumbnail-gallery"]}>
      {pictures.map((picture, index) => (
        <div
          key={index + "picture"}
          className={styles["thumbnail"]}
          onMouseEnter={() => onHover(picture)}
        >
          <img src={picture} alt={`Imagen miniatura ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};
