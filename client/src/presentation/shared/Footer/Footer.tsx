import styles from "./footer.module.scss";

const year = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className={styles["footer-container"]}>
      <div className={styles["container"]}>
        <a
          href="https://www.linkedin.com/in/franciscomolina-dev/"
          target="_blank"
          rel="noreferrer"
          className={styles["link"]}
        >
          <p className={styles["name"]}>Francisco D. Molina</p>
        </a>
        <p className={styles["copyright"]}>
          Challenge Frontend - Mercado Libre {year}
        </p>
      </div>
    </footer>
  );
};
