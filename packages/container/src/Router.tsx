import React from "react";
import { LandingPage } from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";

import "../../ui-libs/pr1-input";
import "./App.scss";
import "./styles/global.scss";

// const CounterAppOne = React.lazy(() => import("shop/CounterAppOne"));
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
      {/* <Route path="shop/*" element={<CounterAppOne />} /> */}
    </Routes>
  );
};

export default Router;
