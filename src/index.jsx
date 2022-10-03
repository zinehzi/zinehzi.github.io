import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
// import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle";
import "./style/custom.scss";
import "./index.scss";
import App from "./components/App/App";
import "./i18n.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
