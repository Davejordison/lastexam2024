import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { makeServer } from "./mirage.js";
import "./index.css";

// do not modify this line
makeServer();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
