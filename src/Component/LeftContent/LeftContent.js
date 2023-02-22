import React from "react";
import { GiChiliPepper, GiTomato } from "react-icons/gi";
import { TbPepper, TbBrandCucumber } from "react-icons/tb";
import "./LeftContent.css";
import burger from "../Assets/burger2.png";

const LeftContent = () => {
  return (
      <div className="mt[40px]">
        <div className="bg-[#D41717] w-[44px] h-[20px]">
          <p className=" text-[10px] font-bold text-white m-2">New</p>
        </div>
        <h1 className="heading-dd leading-none">
          THE DOUBLE <br /> DECKER
        </h1>
        <div className="pepper text-xl mt-[10px] text-[#D41717]">
          <GiChiliPepper />
          <GiChiliPepper />
          <GiChiliPepper />
          <TbPepper />
          <TbPepper />

          <p className="leading-none ml-4">Spicy</p>
        </div>
        <p className="text-[16px] font-semibold mt-[38px]">
          Sed nec consequat lotem. phosellus convallis ante eu augue <br /> finibus
          maximus. In non ex id ultricies. Suspendisse diam id <br /> elit looreet
          porttitot. Proin quis tortor nisi.
        </p>
        <div>
          <div className="mt-[36px]">
            <p className="text-[10px] text-slate-400 ">INGREDIENTS</p>
            <div className="flex text-xl">
              <GiTomato />
              <TbBrandCucumber />
            </div>
          </div>
          <div className="mt-[27px] flex justify-items-center">
            <button className="btn text-[16px] font-bold mr-10 order-btn">
              Order Now
            </button>
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
