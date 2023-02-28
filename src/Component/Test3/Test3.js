import React, { Component } from "react";
import Slider from "react-slick";
import img from "../Assets/burger2.png";
import "./Test3.css";

const CenterMode=()=>  {

  var cursor = document.querySelector(".cursor");
  var cursor2 = document.querySelector(".cursor2");
  document.addEventListener("mousemove", function(e){
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
  })


    const settings = {
      customPaging: function(i) {
        return (
          <a>
            {/* <img src={`${img}/abstract0${i + 1}.jpg`} /> */}
            <img src={img} alt=""  />
          </a>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      
      
    };
    return (
      <div>
        <h2>Custom Paging</h2>

        <Slider {...settings} className="vsb border-4 border-orange-400">
          <div >
            {/* <img src={ + "/abstract01.jpg"} alt="image"/> */}
            <img src={img} alt=""  />
          </div>

          <div>
            {/* <img src={ + "/abstract02.jpg"} /> */}
            <img src={img} alt=""  />

          </div>

          <div >
            {/* <img src={ + "/abstract03.jpg"} /> */}
            <img src={img} alt="" />
          </div>


          <div >
            {/* <img src={ + "/abstract04.jpg"} /> */}
            <img src={img} alt="" />

          </div>
        </Slider>

        <div className="cursor"></div>
        <div className="cursor2" ></div>
      </div>
    );

}
export default CenterMode;