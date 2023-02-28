import React, { useState } from 'react';
import { Transition } from 'react-transition-group';
import burger1 from "../Assets/burger2.png";
import "./Slider.css";

const Slider = () => {
  
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    {
      src: `${burger1}`
    },
    {
      src: `${burger1}`
    },
    {
      src:`${burger1}`
    },
  ]

  const transitionStyles = {
    entering: {
      transition: 'ease-in',
      transform: 'translateX(100%) scale(.000001)'
    },
    entered: {
      transition: 'all .5s .1s',
      transform: 'translateX(0%) scale(1)'
    },
    exiting: {
      transition: 'linear .5',
      transform: 'translateX(-1000%) scale(.5)'
    },
    exited: {
      transition: 'linear .5',
      transform: 'translateX(1000%) scale(.5)'
    }
  }


  const handleNextClick = () => {
    const nextIndex = slideIndex === slides.length - 1 ? 0 : slideIndex + 1;
    setSlideIndex(nextIndex);
  };

  const handlePreviousClick = () => {
    const previousIndex = slideIndex === 0 ? slides.length - 1 : slideIndex - 1;
    setSlideIndex(previousIndex);
  };

  return (
    <div className='slider-container'>
      
      <div>
        {/* Main SLider Image */}
       {slides.map((slide, index) => (
        <Transition key={index} in={index === slideIndex} timeout={500} appear mountOnEnter unmountOnExit>
          {state => ( <img src={slide.src} style={{ ...transitionStyles[state], width: "100%", height: "100%"}}/>)}
        </Transition>
      ))} 
      </div>

    {/* Slide Control Button */}
    <div className='text-center'>
      <button onClick={handleNextClick} className="left-btn nav-btn">❮</button>
      <button onClick={handlePreviousClick} className="right-btn nav-btn">❯</button>
    </div>
 
    </div>
  );
};

export default Slider;