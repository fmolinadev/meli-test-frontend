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
      onSearch();
    }
  };

  const handleSearchClick = () => {
    if (querySearch !== "") {
      onSearch();
    }
  };

  return (
    <div className={styles["searchbar-container"]}>
      <input
        type="text"
        placeholder={placeholder}
        value={querySearch}
        onChange={handleInputChange}
        onKeyDown={(e) => handleKeyPress(e)}
        className={styles["searchbar-input"]}
        aria-label="Barra de búsqueda"
      />
      <button
        onClick={() => handleSearchClick()}
        className={styles["searchbar-button"]}
      >
        <SearchIcon color="#666" height={22} />
      </button>
    </div>
  );
};
