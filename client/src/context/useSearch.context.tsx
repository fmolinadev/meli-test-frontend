import { createContext, ReactNode, useContext, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { SearchResponse } from "../interface/search-response.interface";

interface SearchContextProps {
  querySearch: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
  currentResult: string;
  allResults: SearchResponse | null;
  isLoading: boolean;
  error: Error | null;
  allCategories: string[];
  setAllCategories: React.Dispatch<React.SetStateAction<string[]>>;
  handleReset: () => void;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const useSearchContext = (): SearchContextProps => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearchContext debe estar dentro de un SearchProvider");
  }
  return context;
};

interface Props {
  children: ReactNode;
}

export const SearchProvider: React.FC<Props> = ({ children }) => {
  const [querySearch, setQuerySearch] = useState<string>("");
  const [searchTrigger, setSearchTrigger] = useState<string>("");
  const [currentResult, setCurrentResult] = useState<string>("");
  const [allCategories, setAllCategories] = useState<string[]>([]);

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuerySearch(e.target.value);
  };

  const handleSearch = () => {
    setCurrentResult(querySearch);
    setSearchTrigger(querySearch);

    if (searchTrigger === "" || querySearch === "") {
      navigate(`/`);
    }

    navigate(`/items?search=${querySearch}`);
  };

  const handleReset = () => {
    setAllCategories([]);
    setSearchTrigger("");
    setQuerySearch("");
  };

  const value = useMemo(
    () => ({
      querySearch,
      handleInputChange,
      handleSearch,
      currentResult,
      allCategories,
      setAllCategories,
      handleReset,
    }),
    [querySearch, searchTrigger, currentResult, allCategories, handleSearch]
  );

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
