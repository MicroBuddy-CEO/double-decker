import React, { Component } from "react";
import Slider from "react-slick";
// import { baseUrl } from "./config";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Slider3.css";

export default class CenterMode extends Component {
  render() {
    const settings = {
      customPaging: function(i) {
        return (
          <a>
            {/* <img src={`${baseUrl}/abstract0${i + 1}.jpg`} /> */}
            <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"  alt="" />
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
        <Slider {...settings}>
          <div className="mainImg" >
            {/* <img src={baseUrl + "/abstract01.jpg"} /> */}
            <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" style={{width: "500px", height: "250px"}} alt="" />
          </div>
          <div className="mainImg" >
            {/* <img src={baseUrl + "/abstract02.jpg"} /> */}
            <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" style={{width: "500px", height: "250px"}} alt="" />
          </div>
          <div className="mainImg" >
            {/* <img src={baseUrl + "/abstract03.jpg"} /> */}
            <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" style={{width: "500px", height: "250px"}} alt="" />
          </div>
          <div className="mainImg">
            {/* <img src={baseUrl + "/abstract04.jpg"} /> */}
            <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" style={{width: "500px", height: "250px"}} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}