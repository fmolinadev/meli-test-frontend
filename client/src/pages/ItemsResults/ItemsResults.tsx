import { useSearchContext } from "../../context/useSearch.context";
import { ResultLayout } from "../../layout/Results/ResultLayout";

import { Item, Loader } from "../../presentation";

export const ItemsResults = () => {
  const { currentResult, isLoading, error, searchData } = useSearchContext();

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>Error: {error.message}</h1>
      </div>
    );
  }

  if (searchData && searchData.items.length > 0) {
    return (
      <div>
        <h1>Resultados para: {currentResult}</h1>
        <ResultLayout>
          {searchData.items.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </ResultLayout>
      </div>
    );
  }

  return (
    <div>
      <h1>No se encontraron resultados para: {currentResult}</h1>
      <div>
        <p>Empty state</p>
      </div>
    </div>
  );
};
