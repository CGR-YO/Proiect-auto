import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <div>
        <img src="src/Image/Logo.png" alt="Blog Logo" className="logoCls" />
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
