import React from "react";
import Navbar from "../Navbar/Navbar";
import Test from "../Test/Test";
import TestSlider from "../TestSlider/TestSlider";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container overflow-hidden">

      <Navbar/>
      <TestSlider/>
    
    </div>
  );
};

export default Home;