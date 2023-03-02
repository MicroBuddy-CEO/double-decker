import React, { useState } from "react";
import Slider from "react-slick";
import "./TestSlider.css";
import one from "../Assets/burger2.png";
import two from "../Assets/burger2.png";
import three from "../Assets/burger2.png";
import four from "../Assets/burger2.png";
import five from "../Assets/burger2.png";
import SlideOneLeft from "../AllSlides/SlideOne/SlideOneLeft";
import SlideOneRight from "../AllSlides/SlideOne/SlideOneRight/SlideOneRight";
import SlideTwoLeft from "../AllSlides/SlideTwo/SlideTwoLeft";
import SlideTwoRight from "../AllSlides/SlideTwo/SlideTwoRight";


const images = [one, two, three, four, five];



const TestSlider = () => {


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
        // centerMode: true,


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
        <div className="relative w-screen h-screen overflow-hidden">



            {/* Main Slider */}
            <div className="ml-[440px] mt-32 w-full absolute z-50">
                <Slider {...mainSlider}
                    asNavFor={slider2}
                    ref={slider => (setSlider1(slider))}
                >
                    {
                        images.map((img, index) => (
                            <div className={index === (currentSlide - 1) ? 'prev-slide' : matchIndex(index)} key={img}>
                                <img src={img} alt="" /> </div>
                        ))
                    }
                </Slider>
            </div>



            {/* Thumbnails Slider */}
             <div className=" absolute bottom-[35px] left-40 ml-50px w-[500px] z-50">
                <Slider
                    asNavFor={slider1}
                    ref={slider => (setSlider2(slider))}
                    slidesToShow={5}
                    swipeToSlide={true}
                    focusOnSelect={true}
                >
                    <div>
                        <h3 className="w-[80px]"> <img src={one} alt="burger" /> </h3>
                    </div>
                    <div>
                        <h3 className="w-[80px]"> <img src={one} alt="burger" /> </h3>
                    </div>
                    <div>
                        <h3 className="w-[80px]"> <img src={one} alt="burger" /> </h3>
                    </div>
                    <div>
                        <h3 className="w-[80px]"> <img src={one} alt="burger" /> </h3>
                    </div>
                    <div>
                        <h3 className="w-[80px]"> <img src={one} alt="burger" /> </h3>
                    </div>
                </Slider>
            </div> 


            {/* Background Slider */}
            <div className="absolute top-0 left-0  w-[100%] mx-auto">

                <Slider
                    asNavFor={slider2}
                    ref={slider => (setSlider2(slider))}
                    slidesToShow={1}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    fade={true}

                >
                    <div className="w-[100%] h-[100%]  flex">
                        <div className="flex px-20">
                            <div className="w-[50%]"><SlideOneLeft /></div>
                            <div className="w-[50%]"><SlideOneRight /></div>
                        </div>
                    </div>
                    <div className="w-[100%] h-[100%]  flex">
                        <div className="flex px-20">
                            <div className="w-[50%]"><SlideTwoLeft /></div>
                            <div className="w-[50%]"><SlideTwoRight /></div>
                        </div>
                    </div>
                    <div className="w-[100%] h-[100%]  flex">
                        <div className="flex px-20">
                            <div className="w-[50%]"><SlideOneLeft /></div>
                            <div className="w-[50%]"><SlideOneRight /></div>
                        </div>
                    </div>
                    <div className="w-[100%] h-[100%]  flex">
                        <div className="flex px-20">
                            <div className="w-[50%]"><SlideTwoLeft /></div>
                            <div className="w-[50%]"><SlideTwoRight /></div>
                        </div>
                    </div>
                    <div className="w-[100%] h-[100%]  flex">
                        <div className="flex px-20">
                            <div className="w-[50%]"><SlideOneLeft /></div>
                            <div className="w-[50%]"><SlideOneRight /></div>
                        </div>
                    </div>
                </Slider>
            </div>




        </div>
    );

}

export default TestSlider;