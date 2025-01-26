import { ReactNode } from "react";
import { Header } from "../presentation";

interface Props {
  children: ReactNode;
}

export const AppLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <section>{children}</section>
    </div>
  );
};
