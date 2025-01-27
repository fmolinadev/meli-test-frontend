import React from "react";
import styles from "./searchBar.module.scss";
import { SearchIcon } from "../../../assets";
import { useSearchContext } from "../../../context/useSearch.context";

interface Props {
  onSearch: () => void;
  placeholder?: string;
}

export const Searchbar: React.FC<Props> = ({
  onSearch,
  placeholder = "Nunca dejes de buscar...",
}) => {
  const { querySearch, handleInputChange } = useSearchContext();

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      return onSearch();
    }
  };

  return (
    <div className={styles["searchbar-container"]}>
      <input
        type="text"
        placeholder={placeholder}
        value={querySearch}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        className={styles["searchbar-input"]}
        aria-label="Barra de búsqueda"
      />
      <button
        onClick={onSearch}
        className={styles["searchbar-button"]}
        aria-label="Botón de búsqueda"
      >
        <SearchIcon color="#666" height={22} />
      </button>
    </div>
  );
};
