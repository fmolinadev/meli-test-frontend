import styles from "./breadcrumbs.module.scss";

interface Props {
  breadcrumbs: string[];
}

export const Breadcrumbs = ({ breadcrumbs }: Props) => {
  return (
    <ul className={styles["breadcrumbs"]}>
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
