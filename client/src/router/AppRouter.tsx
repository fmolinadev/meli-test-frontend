import { Routes, Route, Outlet } from "react-router-dom";
import { ErrorPage, HomePage, ItemDetail, ItemsResults } from "../pages";
import { AppLayout } from "../layout/AppLayout";

const LayoutWrapper = () => (
  <AppLayout>
    <Outlet />
  </AppLayout>
);

export function AppRouter() {
  return (
    <Routes>
      <Route element={<LayoutWrapper />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/items" element={<ItemsResults />} />
        <Route path="/items/:id" element={<ItemDetail />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
