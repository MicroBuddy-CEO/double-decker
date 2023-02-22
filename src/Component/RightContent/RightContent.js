import React from "react";
import "./RightContent.css";
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';


const RightContent = () => {
  return (
    <div className="right-container h-[90%]">
      <div className="flex">
        <div className="contetn-one">
          <p className="text-[14px] font-[600]">Calories</p>
          <p className="text-[10px] font-[500] my-[5px]">Kcal</p>
          <p className="text-[24px] font-[700] text-[#D41717]">1370</p>
        </div>
        <div className="contetn-one">
          <p className="text-[14px] font-[600]">Fat</p>
          <p className="text-[10px] font-[500] my-[5px]">g</p>
          <p className="text-[24px] font-[700] text-[#D41717]">93</p>
        </div>
        <div className="contetn-one">
          <p className="text-[14px] font-[600]">Protein</p>
          <p className="text-[10px] font-[500] my-[5px]">g</p>
          <p className="text-[24px] font-[700] text-[#D41717]">85</p>
        </div>
      </div>

      <div className="tag-line">
        <p className="flex justify-items-center text-[14px] font-[700]">NUTRITION ALLERGENS <MdOutlineKeyboardArrowDown className="text-2xl"/></p>
      </div>
    </div>
  );
};

export default RightContent;
