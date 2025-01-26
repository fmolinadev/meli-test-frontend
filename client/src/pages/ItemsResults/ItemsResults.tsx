/**
 * @author Francisco Molina <franciscomolina.dev@gmail.com>
 */

import { useSearchContext } from "../../context/useSearch.context";
import { EmpyLayout, ResultLayout } from "../../layout";
import { EmptyState, Item, LoadingSpinn } from "../../presentation";

export const ItemsResults = () => {
  const { currentResult, isLoading, error, searchData } = useSearchContext();

  if (isLoading) {
    return <LoadingSpinn />;
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
        <ResultLayout>
          {searchData.items.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </ResultLayout>
      </div>
    );
  }

  return (
    <EmpyLayout>
      <EmptyState searchTermos={currentResult} />
    </EmpyLayout>
  );
};
