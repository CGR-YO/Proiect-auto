import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import MyCarousel from "./MyCarousel";
import MyContent from "./MyContent";

const Home = () => {
  return (
    <React.StrictMode>
      <Header />
      <MyCarousel />
      <MyContent />
    </React.StrictMode>
  );
};

export default Home;
