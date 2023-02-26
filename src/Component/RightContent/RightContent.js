import React from "react";
import "./RightContent.css";
import { IoIosArrowForward } from 'react-icons/io';


const RightContent = () => {
  return (
    <div className="right-container">

      {/* Features */}
      <div className="feature-container">
        <div className="content-one">
          <h3>Calories</h3>
          <p>Kcal</p>
          <h1>1370</h1>
        </div>

        <div className="content-one">
          <h3>Calories</h3>
          <p>Kcal</p>
          <h1>1370</h1>
        </div>

        <div className="content-one">
          <h3>Calories</h3>
          <p>Kcal</p>
          <h1>1370</h1>
        </div>
      </div>

      {/* Bottom Nutrition */}
      <div className="nutrition">
        <p>NUTRITION ALLERGENS</p>
        <p className="arrow-icon"><IoIosArrowForward /></p>
      </div>

    </div>
  );
};

export default RightContent;