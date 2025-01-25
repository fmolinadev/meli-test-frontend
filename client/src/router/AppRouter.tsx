import { Routes, Route } from "react-router-dom";
import { ErrorPage, HomePage, ItemDetail, ItemsResults } from "../pages";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/items" element={<ItemsResults />} />
      <Route path="/items/:id" element={<ItemDetail />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
