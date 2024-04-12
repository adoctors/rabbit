import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Routes from "@/routes";
import "../tailwind.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <Routes />
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>
);
