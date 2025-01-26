/**
 * @author Francisco Molina <franciscomolina.dev@gmail.com>
 */

import { ReactNode } from "react";
import { useSearchContext } from "../../context/useSearch.context";
import { Breadcrumbs } from "../../presentation";
import styles from "./results.module.scss";
interface Props {
  children: ReactNode;
}

export const ResultLayout = ({ children }: Props) => {
  const { searchData } = useSearchContext();
  return (
    <>
      <Breadcrumbs breadcrumbs={searchData.categories} />
      <div className={styles["result-container"]}>
        <section className={styles["result-placement-colum"]}>
          {children}
        </section>
      </div>
    </>
  );
};
