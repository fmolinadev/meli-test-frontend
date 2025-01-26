import { Searchbar } from "../../components";
import MercadoLibreBrand from "../../../assets/images/mercadolibre-icon.png";
import styles from "./header.module.scss";

export const Header = () => {
  const handleSearch = (query: string) => {
    console.log("Valor buscado:", query);
  };

  return (
    <header className={styles["header-container"]}>
      <div className={styles["header-placement"]}>
        <img
          src={MercadoLibreBrand}
          alt="Mercado Libre"
          aria-label="Logo de mercado libre"
          loading="lazy"
          className={styles["branding"]}
        />
        <Searchbar onSearch={handleSearch} />
      </div>
    </header>
  );
};
