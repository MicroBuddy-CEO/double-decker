import React from "react";
import "./LeftContent.css";
import burger from "../Assets/burger2.png";
import pepper from "../Assets/pepper.jpg";
import tomato from "../Assets/tomato.jpg";
import cucumber from "../Assets/cucumber.jpg";


const LeftContent = () => {
  return (
      <div className="left-container">

        <div className="btn-new"> <p> New </p> </div>

        <h1 className="dobule-decker"> THE DOUBLE <br /> DECKER </h1>

        {/* Pepper & Spicy Section */}
        <div className="pepper-container">
          <img src={pepper} alt="pepper" />
          <img src={pepper} alt="pepper" />
          <img src={pepper} alt="pepper" />
          <img src={pepper} alt="pepper" className="opacity-40"/>
          <img src={pepper} alt="pepper" className="opacity-40"/>
          <p>Spicy</p>
        </div>

        {/* Description */}
        <p className="description">
          Sed nec consequat lotem. phosellus convallis ante eu augue <br /> finibus
          maximus. In non ex id ultricies. Suspendisse diam id <br /> elit looreet
          porttitot. Proin quis tortor nisi.
        </p>

        {/* Ingredients and Order Button */}
        <div className="ingradient-order-price-container">

          {/* Ingredients */}
          <div className="ingradient">
            <p>INGREDIENTS</p>
            <div className="icon">
              <img src={tomato} alt="tomato" />
              <img src={cucumber} alt="cucumber" />
            </div>
          </div>

          {/* Order Button */}
          <div className="price_order_btn-conatiner">
            <div className="btn order-btn-cont"><button>Order Now</button></div>
            <div className="price-container">
              <p className="price">$12.99 </p>
              <p className="sub-price">$14.99</p>
              <p className="qunatity">+03</p>
            </div>
          </div>
        </div>

        {/*Left Bottom Burger Navigation */}
        <div className="burger-navigation">
          <img src={burger} alt="burger" />
          <img src={burger} alt="burger" />
          <img src={burger} alt="burger" />
          <img src={burger} alt="burger" />
          <img src={burger} alt="burger" />
        </div>
      </div>
  );
};

export default LeftContent;