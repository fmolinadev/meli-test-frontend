import { createContext, ReactNode, useContext, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useGetSearch } from "../hooks/useSearchs";
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
  const [allResults, setAllResults] = useState<SearchResponse | null>(null);
  const [allCategories, setAllCategories] = useState<string[]>([]);

  const { data: searchData, isLoading, error } = useGetSearch(searchTrigger);

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuerySearch(e.target.value);
  };

  const handleSearch = () => {
    setAllResults(null);
    setCurrentResult(querySearch);
    setSearchTrigger(querySearch);

    if (searchTrigger === "" || querySearch === "") {
      navigate(`/`);
    }

    if (!isLoading && searchData) {
      setAllCategories(searchData.categories);
      setAllResults(searchData);
      navigate(`/items?search=${querySearch}`);
    } else {
      setAllResults(null);
    }
  };

  const handleReset = () => {
    setAllCategories([]);
    setSearchTrigger("");
    setQuerySearch("");
    setAllResults(null);
  };

  const value = useMemo(
    () => ({
      querySearch,
      handleInputChange,
      handleSearch,
      currentResult,
      isLoading,
      error,
      allResults,
      allCategories,
      setAllCategories,
      handleReset,
    }),
    [
      querySearch,
      searchTrigger,
      currentResult,
      isLoading,
      error,
      allResults,
      allCategories,
      setAllResults,
      handleSearch,
    ]
  );

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
