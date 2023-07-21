import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Modules/Home/Home.jsx";
import Library from "./Modules/Library/Library";
import NavBar from "./Modules/NavBar/NavBar.jsx";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <NavBar />
    </>
  );
};

export default App;
