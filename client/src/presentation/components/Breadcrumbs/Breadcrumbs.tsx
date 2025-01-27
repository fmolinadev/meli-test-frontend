import { useLocation } from "react-router-dom";
import styles from "./breadcrumbs.module.scss";

interface Props {
  breadcrumbs: string[];
}

export const Breadcrumbs = ({ breadcrumbs }: Props) => {
  const location = useLocation();
  const isItemDetailPage = location.pathname.startsWith("/items/");

  const goBack = () => {
    window.history.back();
  };

  return (
    <ul className={styles["breadcrumbs"]}>
      {isItemDetailPage && (
        <li className={styles["breadcrumb"]}>
          <div className={styles["navigator-li"]} onClick={() => goBack()}>
            Volver
          </div>
          <span className={styles["separator"]}>|</span>
        </li>
      )}
      {breadcrumbs.map((category, index) => (
        <li key={category} className={styles["breadcrumb"]}>
          <span
            className={index === breadcrumbs.length - 1 ? styles["active"] : ""}
          >
            {category}
          </span>
          {index < breadcrumbs.length - 1 && (
            <span className={styles["separator"]}>&gt;</span>
          )}
        </li>
      ))}
    </ul>
  );
};
