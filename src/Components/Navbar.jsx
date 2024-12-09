import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar Nav flex justify-between items-center w-[10%] mx-auto">
      <div className="md:static absolute bg-white md:min-h-fit min-h-[60vh] left-3s2 top-[9%] md:w-auto w-30 px-0 ">
        <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 align-top  font-[popins]">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/despre">Despre</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li></li>
        </ul>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
