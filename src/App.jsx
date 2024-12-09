import React from "react";
import { Route, Routes } from "react-router-dom";
import { PiChecksLight } from "react-icons/pi";
import Home from "./Components/Home";
import Programari from "./Components/Programari";
import Despre from "./Components/Despre";
import Contact from "./Components/Contact";
import "./index.css";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/despre" element={<Despre />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/programari" element={<Programari />} />
      </Routes>
    </div>
  );
};

export default App;
