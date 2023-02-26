import React from "react";
import LeftContent from "../LeftContent/LeftContent";
import Navbar from "../Navbar/Navbar";
import RightContent from "../RightContent/RightContent";
import Slider from "../Slider/Slider";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">

      <Navbar/>

      <div className="body-container">
        
        <div className="body-leftContainer"> <LeftContent/> </div>
        
        <div className="body-slideContainer"> <Slider/> </div>

        <div className="body-rightContainer"> <RightContent/> </div>

      </div>

    </div>
  );
};

export default Home;