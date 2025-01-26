/**
 * @author Francisco Molina <franciscomolina.dev@gmail.com>
 */
import { ReactNode } from "react";
import styles from "./empy.module.scss";
interface Props {
  children: ReactNode;
}

export const EmpyLayout = ({ children }: Props) => {
  return (
    <div className={styles["empty-container"]}>
      <section className={styles["empty-placement-colum"]}>{children}</section>
    </div>
  );
};
