import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Modules/Home/Home.jsx";
import Library from "./Modules/Library/Library";
import NavBar from "./Modules/NavBar/NavBar.jsx";
import Orders from "./Modules/Orders/Orders";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <NavBar />
    </>
  );
};

export default App;
