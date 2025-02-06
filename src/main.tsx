import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { foodApi } from "./store/service/foodApi.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApiProvider api={foodApi}>
      <App />
    </ApiProvider>
  </StrictMode>
);
