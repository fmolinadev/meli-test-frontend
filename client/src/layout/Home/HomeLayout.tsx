import { ReactNode } from "react";
import { Footer, Header } from "../../presentation";
import styles from "./home.module.scss";

interface Props {
  children: ReactNode;
}

export const HomeLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <main className={styles["home-container"]}>
        <section className={styles["home-placement"]}>{children}</section>
      </main>
      <Footer />
    </div>
  );
};
