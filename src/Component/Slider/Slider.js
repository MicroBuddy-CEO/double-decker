import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from "../Assets/burger2.png"
import "./Slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Slider = () => {



    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };

    return (
        <div className=" border border-red-500">
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img1} alt="" /></SwiperSlide>

            </Swiper>
        </div>
    );
}


export default Slider;