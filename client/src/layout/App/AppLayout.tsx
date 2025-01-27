import { ReactNode } from "react";
import { Footer, Header } from "../../presentation";
import styles from "./page.module.scss";

interface Props {
  children: ReactNode;
}

export const AppLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <main className={styles["page-container"]}>
        <section className={styles["page-placement"]}>{children}</section>
      </main>
      <Footer />
    </div>
  );
};
