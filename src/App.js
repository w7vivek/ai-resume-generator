import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Index } from "./components/Index";
import About from "./components/About";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
