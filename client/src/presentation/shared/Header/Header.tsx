import { useNavigate, useLocation } from "react-router-dom"; // Importa useNavigate y useLocation
import { Searchbar } from "../../components";
import MercadoLibreBrand from "../../../assets/images/mercadolibre-icon.png";
import styles from "./header.module.scss";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (query: string) => {
    console.log("Valor buscado:", query);
  };

  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
    }
  };

  return (
    <header className={styles["header-container"]}>
      <div className={styles["header-placement"]}>
        <div onClick={handleLogoClick}>
          <img
            src={MercadoLibreBrand}
            alt="Mercado Libre"
            aria-label="Logo de mercado libre"
            loading="lazy"
            className={styles["branding"]}
          />
        </div>

        <Searchbar onSearch={handleSearch} />
      </div>
    </header>
  );
};
