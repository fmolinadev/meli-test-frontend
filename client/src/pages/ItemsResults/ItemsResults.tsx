import { useLocation } from "react-router-dom";

export const ItemsResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search");
  return (
    <div>
      <h1>Resultados para: {searchQuery}</h1>
    </div>
  );
};
