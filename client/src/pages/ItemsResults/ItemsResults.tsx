import { Link, useLocation, Navigate } from "react-router-dom";
import { useSearchContext } from "../../context/useSearch.context";
import { EmpyLayout, ResultLayout } from "../../layout";
import { EmptyState, Item, LoadingSpinn } from "../../presentation";
import { useGetSearch } from "../../hooks";
import { useEffect } from "react";
import styles from "./item-result.module.scss";

export const ItemsResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTrigger = searchParams.get("search") || "";

  const { currentResult, setAllCategories } = useSearchContext();
  const { data: allResults, isLoading, error } = useGetSearch(searchTrigger);

  useEffect(() => {
    if (allResults && allResults.categories) {
      setAllCategories(allResults.categories);
    }
  }, [allResults, setAllCategories]);

  if (!searchTrigger) {
    return <Navigate to="/" replace />;
  }

  if (isLoading) {
    return <LoadingSpinn />;
  }

  if (error) {
    return (
      <EmpyLayout>
        <div>
          <h1>Ups! Algo salio mal. Intentalo de nuevo</h1>
        </div>
      </EmpyLayout>
    );
  }

  if (allResults && allResults.items.length > 0) {
    return (
      <ResultLayout>
        {allResults.items.map((item) => (
          <Link
            className={styles["link-no-style"]}
            to={`/items/${item.id}`}
            key={item.id}
          >
            <Item item={item} />
          </Link>
        ))}
      </ResultLayout>
    );
  }

  return (
    <EmpyLayout>
      <EmptyState searchTermos={currentResult} />
    </EmpyLayout>
  );
};
