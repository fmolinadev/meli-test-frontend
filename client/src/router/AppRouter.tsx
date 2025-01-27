import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import { ErrorPage, HomePage, ItemDetail, ItemsResults } from "../pages";
import { AppLayout, HomeLayout } from "../layout";
import { Footer } from "../presentation";

const LayoutWrapper = () => {
  const location = useLocation();
  const isHomeRoute = location.pathname === "/";
  return isHomeRoute ? (
    <HomeLayout>
      <Outlet />
    </HomeLayout>
  ) : (
    <AppLayout>
      <Outlet />
      <Footer />
    </AppLayout>
  );
};

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
