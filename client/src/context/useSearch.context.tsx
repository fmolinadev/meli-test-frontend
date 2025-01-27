/**
 * @author Francisco Molina <franciscomolina.dev@gmail.com>
 */
import { createContext, ReactNode, useContext, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useGetSearch } from "../hooks/useSearchs";
import { SearchResponse } from "../interface/search-response.interface";

interface SearchContextProps {
  querySearch: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement> | string) => void;
  currentResult: string;
  handleCurrentResult: (current: string) => void;
  setQuerySearch: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
  allResults: SearchResponse | null;
  isLoading: boolean;
  error: Error | null;
  allCategories: string[];
  setAllCategories: React.Dispatch<React.SetStateAction<string[]>>;
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
  const [currentResult, setCurrentResult] = useState<string>("");
  const [allResults, setAllResults] = useState<SearchResponse | null>(null);
  const [allCategories, setAllCategories] = useState<string[]>([]);

  const { data: searchData, isLoading, error } = useGetSearch(querySearch);

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuerySearch(e.target.value);
  };

  const handleCurrentResult = (current: string) => {
    setCurrentResult(current);
  };

  const handleSearch = () => {
    if (!querySearch) return;

    handleCurrentResult(querySearch);

    if (searchData && !isLoading && !error) {
      setAllResults(searchData);
      setAllCategories(searchData.categories);
      navigate(`/items?search=${querySearch}`);
    } else {
      console.error("Error al obtener los datos o búsqueda vacía.");
    }
  };

  const value = useMemo(
    () => ({
      querySearch,
      handleInputChange,
      currentResult,
      handleCurrentResult,
      setQuerySearch,
      handleSearch,
      isLoading,
      error,
      allResults,
      allCategories,
      setAllCategories,
    }),
    [
      querySearch,
      currentResult,
      handleSearch,
      isLoading,
      error,
      allResults,
      allCategories,
    ]
  );

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
