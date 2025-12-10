// What it does: Mounts App.jsx into index.html
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";  // ← imports your routes

ReactDOM.createRoot(document.getElementById("root")).render(  // ← finds #root div
  <React.StrictMode>
    <App />  // ← starts your routing + pages
  </React.StrictMode>
);
