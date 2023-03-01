import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";


import one from "../Assets/burger2.png";
import two from "../Assets/burger2.png";
import three from "../Assets/burger2.png";
import four from "../Assets/burger2.png";
import five from "../Assets/burger2.png";
import six from "../Assets/burger2.png";


const images = [one, two, three, four, five, six];

const Slider4 = () => {


    const [slideIndex, setSlideIndex] = useState(0)
    const [currentSlide, setCurrentSlide] = useState(0)


    const settings = {
        dots: true,
        infinite: true,
        className: "center",
        // centerMode: true,
        // centerPadding: false,
        speed: 500,
        slidesToShow: 2,
        arrows: true,
        slidesToScroll: 1,

        beforeChange: (current, next) => {
            setSlideIndex(next)
        },
        afterChange: (one, two, current) => {
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
        <div className="container">
            <div className="slider">
                <Slider {...settings} >
                    {
                        images.map((img, index) => (
                            <div className={index === (currentSlide - 1) ? 'prev-slide' : matchIndex(index)} key={img}>
                                <img src={img} alt="" /></div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Slider4;