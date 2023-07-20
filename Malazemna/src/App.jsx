import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Modules/Home/Home.jsx";
import Library from "./Modules/Library/Library";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Library />} />
    </Routes>
  );
};

export default App;
