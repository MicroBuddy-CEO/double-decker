import React from "react";
import { GiChiliPepper, GiTomato } from "react-icons/gi";
import { TbPepper, TbBrandCucumber } from "react-icons/tb";
import "./LeftContent.css";
import burger from "../Assets/burger2.png";
import pepper from "../Assets/pepper.jpg";
import tomato from "../Assets/tomato.jpg";
import cucumber from "../Assets/cucumber.jpg";


const LeftContent = () => {
  return (
      <div className="left-container">

        <div className="btn-new">
          <p>New</p>
        </div>
        <h1 className="dobule-decker">
          THE DOUBLE <br /> DECKER
        </h1>

        {/* Pepper & Spicy Section */}
        <div className="pepper-container text-xl mt-[10px] text-[#D41717]">
          <img src={pepper} alt="" />
          <img src={pepper} alt="" />
          <img src={pepper} alt="" />
          <img src={pepper} alt="" className="opacity-40"/>
          <img src={pepper} alt="" className="opacity-40"/>
          <p>Spicy</p>
        </div>

        {/* Description */}
        <p className="description">
          Sed nec consequat lotem. phosellus convallis ante eu augue <br /> finibus
          maximus. In non ex id ultricies. Suspendisse diam id <br /> elit looreet
          porttitot. Proin quis tortor nisi.
        </p>

        <div className="ingradient-order-price-container">
          <div className="ingradient">
            <p className="text-[10px] text-slate-400 ">INGREDIENTS</p>
            <div className="icon">
              <img src={tomato} alt="" />
              <img src={cucumber} alt="" />
            </div>
          </div>
          <div className="price_order_btn-conatiner">

            <div className="btn order-btn-cont border-0">
            <button>Order Now</button>
            </div>

            <div className="ml-10 price-conta">
              <p className="price">$12.99 </p>
              <p className="sub-price">$14.99</p>
              <p className="qunatity">+03</p>
            </div>
          </div>
        </div>


        <div className="burger-navigation mt-[50px] flex">
          <img src={burger} className="w-[99px] h-[92px]" alt="" />
          <img src={burger} className="w-[99px] h-[92px]" alt="" />
          <img src={burger} className="w-[99px] h-[92px]" alt="" />
          <img src={burger} className="w-[99px] h-[92px]" alt="" />
          <img src={burger} className="w-[99px] h-[92px]" alt="" />
        </div>
      </div>
  );
};

export default LeftContent;