import React from "react";
import { LandingPage } from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";

import "./App.scss";
import "./styles/global.scss";

const Shop = React.lazy(() => import("shop/Shop"));

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <React.Suspense fallback={<></>}>
            <LandingPage />
          </React.Suspense>
        }
      />
      <Route path="/shop/*" element={<Shop />} />
    </Routes>
  );
};

export default Router;
