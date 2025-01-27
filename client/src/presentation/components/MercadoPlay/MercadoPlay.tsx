import MercadoPlayImg from "../../../assets/images/mercado_play.png";
import styles from "./mercado-play.module.scss";

export const MercadoPlay = () => {
  return (
    <section className={styles["section-mercado-play"]}>
      <div className={styles["section-mercado-play-container"]}>
        <div>
          <h4>Entretenimiento gratis en la app de Mercado Libre</h4>
          <p>
            Mercado Play es una sección de Mercado Libre en la que vas a
            encontrar contenidos gratis, de forma fácil, rápida y segura.
          </p>
        </div>
        <figure>
          <img
            src={MercadoPlayImg}
            alt=" Mercado Play"
            aria-lebel="Imagen de mercado play"
          />
        </figure>
      </div>
    </section>
  );
};
