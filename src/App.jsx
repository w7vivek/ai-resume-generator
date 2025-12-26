// // App.jsx
// import React from "react";
// import { Routes, Route } from "react-router-dom"; // must be *react-router-dom*
// import { Index } from "./components/Index";
// import About from "./components/About";

// function App() {
//   return (
//     <Routes>
//         <Route path="/ai-resume-generator" element={<Index />} />
//         <Route path="/ai-resume-generator/about" element={<About />} />
//     </Routes>
//   );
// }

// export default App;


import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Index } from "./components/Index";
import About from "./components/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/ai-resume-generator/about" element={<About />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
