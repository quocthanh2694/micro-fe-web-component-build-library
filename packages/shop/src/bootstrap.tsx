import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ROUTER_BASE_URL } from "../utils/ensure-basename";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter basename={'/shop'}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
