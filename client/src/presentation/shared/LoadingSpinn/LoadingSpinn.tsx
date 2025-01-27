import styles from "./loading-spin.module.scss";

import { Loader } from "../../components";

export const LoadingSpinn = () => {
  return (
    <div className={styles["loading-container"]}>
      <Loader />
    </div>
  );
};
