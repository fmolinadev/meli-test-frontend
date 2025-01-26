import React, { useState } from "react";
import styles from "./searchBar.module.scss";
import { SearchIcon } from "../../../assets";

interface Props {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export const Searchbar: React.FC<Props> = ({
  onSearch,
  placeholder = "Nunca dejes de buscar...",
}) => {
  const [query, setQuery] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(query);
    }
  };

  const handleSearchClick = () => {
    onSearch(query);
  };

  return (
    <div className={styles["searchbar-container"]}>
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        className={styles["searchbar-input"]}
        aria-label="Barra de búsqueda"
      />
      <button
        onClick={handleSearchClick}
        className={styles["searchbar-button"]}
      >
        <SearchIcon color="#666" height={22} />
      </button>
    </div>
  );
};
