// App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Index } from "./components/Index";
import About from "./components/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
