import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Programari } from "./Components/Programari";
import Home from "./Components/Home";

export const AppRoutes = () => {
  return (
    <Routes>
      <Routes path="/" element={<Home />} />
    </Routes>
  );
};
