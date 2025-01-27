import styles from "./thumbnail-gallery.module.scss";

interface Props {
  pictures: string[];
  onHover: (url: string) => void;
}

export const ThumbnailGallery = ({ pictures, onHover }: Props) => {
  const maxVisible = 6;
  const visiblePictures = pictures.slice(0, maxVisible);
  const remainingCount = pictures.length - maxVisible;

  return (
    <div className={styles["thumbnail-gallery"]}>
      {visiblePictures.map((picture, index) => (
        <div
          key={index + "picture"}
          className={styles["thumbnail"]}
          onMouseEnter={() => onHover(picture)}
        >
          <img src={picture} alt={`Imagen miniatura ${index + 1}`} />
        </div>
      ))}
      {remainingCount > 0 && (
        <div className={styles["thumbnail-extra"]}>
          <span>+{remainingCount}</span>
        </div>
      )}
    </div>
  );
};
