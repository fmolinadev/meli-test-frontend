import FreeShipping from "../../../assets/images/envios.png";
import WithoutInterest from "../../../assets/images/contenido.png";
import styles from "./ahipping-box.module.scss";

export const ShippingBox = () => {
  return (
    <div className={styles["shipping-box"]}>
      <figure>
        <img src={WithoutInterest} alt="Productos en coutas" />
      </figure>
      <figure>
        <img src={FreeShipping} alt="Envios sin cargo" />
      </figure>
    </div>
  );
};
