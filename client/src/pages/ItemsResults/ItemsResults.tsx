/**
 * @author Francisco Molina <franciscomolina.dev@gmail.com>
 */
import { Link } from "react-router-dom";
import { useSearchContext } from "../../context/useSearch.context";
import { EmpyLayout, ResultLayout } from "../../layout";
import { EmptyState, Item, LoadingSpinn } from "../../presentation";
import styles from "./item-result.module.scss";

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
            <Link className={styles["link-no-style"]} to={`/items/${item.id}`}>
              <Item key={item.id} item={item} />
            </Link>
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
