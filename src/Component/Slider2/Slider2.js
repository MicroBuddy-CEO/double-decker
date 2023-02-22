import React from 'react';
import img1 from "../Assets/burger2.png";
import "./Slider2.css";

const Slider2 = () => {
    return (
            <div className="carousel mt-[80px]">

                <div id="slide1" className="carousel-item relative w-full overflow-hidden">
                    <div className='img-container'>
                    <img src={img1} className="w-[643px] h-[565px]" />
                    <img src={img1} className="w-[443px] h-[365px] mt-[100px] ml-[250px]" /> 
 
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2  bottom-0 left-[18%]">
                        <a href="#slide3" className="btn btn-circle border-0 bg-[#ffff00] text-black mr-[150px]">❮</a>
                        <a href="#slide2" className="btn btn-circle border-0 bg-white text-black">❯</a>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full overflow-hidden">
                    <div className='img-container '>
                    <img src={img1} className="w-[643px] h-[565px]" /> 
                    <img src={img1} className="w-[443px] h-[365px] mt-[100px] ml-[250px]" /> 
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2  bottom-0 left-[18%]">
                        <a href="#slide1" className="btn btn-circle border-0 bg-[#ffff00] text-black mr-[150px]">❮</a>
                        <a href="#slide3" className="btn btn-circle border-0 bg-white text-black">❯</a>
                    </div>
                </div>

                <div id="slide3" className="carousel-item relative w-full">
                    <div className='img-container '>
                    <img src={img1} className="w-[643px] h-[565px]" />
                    <img src={img1} className="w-[443px] h-[365px] mt-[100px] ml-[250px]" /> 
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2  bottom-0 left-[18%]">
                        <a href="#slide2" className="btn btn-circle border-0 bg-[#ffff00] text-black mr-[150px]">❮</a>
                        <a href="#slide1" className="btn btn-circle border-0 bg-white text-black">❯</a>
                    </div>
                </div>
 
            </div>
    );
};

export default Slider2;