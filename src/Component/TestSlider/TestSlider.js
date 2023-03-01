import React, { useState } from "react";
import Slider from "react-slick";
import "./TestSlider.css";

import one from "../Assets/burger2.png";
import two from "../Assets/burger2.png";
import three from "../Assets/burger2.png";
import four from "../Assets/burger2.png";
import five from "../Assets/burger2.png";
import six from "../Assets/burger2.png";
import LeftContent from "../LeftContent/LeftContent";
import RightContent from "../RightContent/RightContent";


const images = [one, two, three, four, five, six];



const AsNavFor = () => {


    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);
    const [slideIndex, setSlideIndex] = useState(0)
    const [currentSlide, setCurrentSlide] = useState(0)


    const mainSlider = {
        infinite: true,
        className: "center",
        speed: 500,
        slidesToShow: 2,
        arrows: true,
        slidesToScroll: 1,
        centerMode: true,


        beforeChange: (current, next) => {
            setSlideIndex(next)
        },
        afterChange: (one, two,) => {
            setCurrentSlide(one);
        }
    }

    const matchIndex = (index) => {
        if (index === slideIndex) {
            return 'slide slide-active';
        } else {
            return 'slide';
        }
    }


    return (
        <div className="relative w-screen h-screen border-8 border-cyan-600  overflow-x-hidden">
         
  

        {/* Main Slider */}
        <div className="border border-yellow-500 w-[100%] h-[100%] mx-auto flxe justify-center items-center pt-28">
          <Slider
                {...mainSlider}
                asNavFor={slider2}
                ref={slider => (setSlider1(slider))}
            >

                {
                    images.map((img, index) => (
                        <div className={index === (currentSlide - 1) ? 'prev-slide' : matchIndex(index)} key={img}>
                            <img src={img} alt="" /></div>
                    ))
                }

            </Slider>
          </div>


            {/* Thumbnails Slider */}
            <div className=" absolute bottom-10 left-40 ml-50px w-[500px]">
            <Slider
                asNavFor={slider1}
                ref={slider => (setSlider2(slider))}
                slidesToShow={6}
                swipeToSlide={true}
                focusOnSelect={true}
            >
                <div>
                    <h3 className="w-[50px]"> <img src={one} alt="burger" /> </h3>
                </div>
                <div>
                    <h3 className="w-[50px]"> <img src={one} alt="burger" /> </h3>
                </div>
                <div>
                    <h3 className="w-[50px]"> <img src={one} alt="burger" /> </h3>
                </div>
                <div>
                    <h3 className="w-[50px]"> <img src={one} alt="burger" /> </h3>
                </div>
                <div>
                    <h3 className="w-[50px]"> <img src={one} alt="burger" /> </h3>
                </div>
            </Slider>

            </div>

            {/* Background Slider */}
            <div className="absolute top-0 border-4 border-red-600 -z-10 w-[100%] mx-auto">

           <Slider
                asNavFor={slider2}
                ref={slider => (setSlider2(slider))}
                slidesToShow={1}
                swipeToSlide={true}
                focusOnSelect={true}
                fade={true}
                
            >
                <div className="w-[100%] h-[100%] border border-black text-5xl flex">
                    <div className="flex px-20">
                    <div className="w-[50%]"><LeftContent/></div>
                    <div className="w-[50%]"><RightContent/></div>
                    </div>
                </div>
                <div className="w-[100%] h-[100%] border border-black text-5xl flex">
                    <div className="flex px-20">
                    <div className="w-[50%]"><LeftContent/></div>
                    <div className="w-[50%]"><RightContent/></div>
                    </div>
                </div>
                <div className="w-[100%] h-[100%] border border-black text-5xl flex">
                    <div className="flex px-20">
                    <div className="w-[50%]"><LeftContent/></div>
                    <div className="w-[50%]"><RightContent/></div>
                    </div>
                </div>
                <div className="w-[100%] h-[100%] border border-black text-5xl flex">
                    <div className="flex px-20">
                    <div className="w-[50%]"><LeftContent/></div>
                    <div className="w-[50%]"><RightContent/></div>
                    </div>
                </div>
                <div className="w-[100%] h-[100%] border border-black text-5xl flex">
                    <div className="flex px-20">
                    <div className="w-[50%]"><LeftContent/></div>
                    <div className="w-[50%]"><RightContent/></div>
                    </div>
                </div>

            </Slider>
           </div>




        </div>
    );

}

export default AsNavFor;