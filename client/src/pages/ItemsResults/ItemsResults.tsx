/**
 * @author Francisco Molina <franciscomolina.dev@gmail.com>
 */

import { Link } from "react-router-dom";
import { useSearchContext } from "../../context/useSearch.context";
import { EmpyLayout, ResultLayout } from "../../layout";
import { EmptyState, Item, LoadingSpinn } from "../../presentation";
import styles from "./item-result.module.scss";

export const ItemsResults = () => {
  const { currentResult, isLoading, error, allResults } = useSearchContext();

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

  if (allResults && allResults.items.length > 0) {
    return (
      <ResultLayout>
        {allResults.items.map((item) => (
          <Link className={styles["link-no-style"]} to={`/items/${item.id}`}>
            <Item key={item.id} item={item} />
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
