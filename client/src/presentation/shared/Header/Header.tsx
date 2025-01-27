import { useNavigate, useLocation } from "react-router-dom";
import MercadoLibreBrand from "../../../assets/images/mercadolibre-icon.png";
import { Searchbar } from "../../components";
import { useSearchContext } from "../../../context/useSearch.context";
import styles from "./header.module.scss";

export const Header = () => {
  const {
    handleSearch,
    handleCurrentResult,
    setQuerySearch,
    setAllCategories,
  } = useSearchContext();

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      handleCurrentResult("");
      setAllCategories([]);
      setQuerySearch("");
      navigate("/");
    }
  };

  return (
    <header className={styles["header-container"]}>
      <div className={styles["header-placement"]}>
        <div onClick={() => handleLogoClick()}>
          <img
            src={MercadoLibreBrand}
            alt="Mercado Libre"
            aria-label="Logo de mercado libre"
            loading="lazy"
            className={styles["branding"]}
          />
        </div>
        <Searchbar onSearch={() => handleSearch()} />
      </div>
    </header>
  );
};
