import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchIcon } from "../../../assets";
import styles from "./searchBar.module.scss";

interface Props {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export const Searchbar: React.FC<Props> = ({
  onSearch,
  placeholder = "Nunca dejes de buscar...",
}) => {
  const [query, setQuery] = useState<string>("");
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (query !== "" && e.key === "Enter") {
      onSearch(query);
      navigate(`/items?search=${query}`);
    }
  };

  const handleSearchClick = () => {
    if (query !== "") {
      onSearch(query);
      navigate(`/items?search=${query}`);
    }
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
