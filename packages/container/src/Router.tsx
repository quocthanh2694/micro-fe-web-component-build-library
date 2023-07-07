import React from "react";
import { LandingPage } from "./pages/LandingPage";
import { Routes, Route, Navigate } from "react-router-dom";

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
      <Route
        path="/shop/*"
        element={
          <React.Suspense fallback={<></>}>
            <Shop />
          </React.Suspense>
        }
      />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default Router;
