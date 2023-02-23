import React from "react";
import LeftContent from "../LeftContent/LeftContent";
import Navbar from "../Navbar/Navbar";
import RightContent from "../RightContent/RightContent";
import Slider from "../Slider/Slider";
import Slider2 from "../Slider2/Slider2";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container h-[100vh]">
      <Navbar></Navbar>

      <div className="flex justify-between items-center relative  h-[90vh] px-20  ">

        <div className="h-[100%] w-[100%]">
          <LeftContent/>
        </div>
        <div className="slider absolute left-[34%] z-50 mt-10">
          <Slider></Slider>
        </div> 
        <div className="RightContent h-[100%] w-[100%]">
          <RightContent/>
        </div>

      </div>
    </div>
  );
};

export default Home;