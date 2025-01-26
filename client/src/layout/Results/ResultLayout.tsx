import { ReactNode } from "react";
import styles from "./results.module.scss";
interface Props {
  children: ReactNode;
}

export const ResultLayout = ({ children }: Props) => {
  return (
    <div className={styles["result-container"]}>
      <section className={styles["result-placement-colum"]}>{children}</section>
    </div>
  );
};
