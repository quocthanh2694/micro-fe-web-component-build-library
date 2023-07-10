import { Navigate, Route, Routes } from "react-router-dom";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { Layout } from "./components/layout/Layout";
import { BASE_URL, URI } from "./constants/constant";
import CartPage from "./pages/CartPage";
import { HomePage } from "./pages/HomePage";
import { ProductPage } from "./pages/ProductPage";
import useCurrentResolvedPath from "./hooks/useCurrentResolvedPath";

const Router = () => {
  const { generateNavPath } = useCurrentResolvedPath();
  return (
    <>
      <Layout>
        <Header />
        <div className="shop-layout__body">
          <Routes>
            <Route index element={<HomePage />} />
            <Route path={URI.product} element={<ProductPage />} />
            <Route path={URI.cart} element={<CartPage />} />
            <Route
              path="*"
              element={<Navigate replace to={generateNavPath(URI.shop)} />}
            />
          </Routes>
        </div>
        <Footer />
      </Layout>
    </>
  );
};

if (window.location.pathname === "/") {
  window.location.replace(BASE_URL);
}

export default Router;
