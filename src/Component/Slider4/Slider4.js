import React from 'react';
import img1 from "../Assets/burger2.png"

const Slider4 = () => {


    return (
        <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider>

        <ul class="uk-slider-items uk-grid">
          <li class="uk-width-4-5">
            <div class="uk-panel">
              <img src="https://getuikit.com/docs/images/photo.jpg" width="800" height="200" alt=""/>
              <div class="uk-position-center uk-text-center">
                <h2 uk-slider-parallax="x: 100,-100">Heading</h2>
                <p uk-slider-parallax="x: 200,-200">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </li>
          <li class="uk-width-4-5">
            <div class="uk-panel">
              <img src="https://getuikit.com/docs/images/dark.jpg" width="800" height="200" alt=""/>
              <div class="uk-position-center uk-text-center">
                <h2 uk-slider-parallax="x: 100,-100">Heading</h2>
                <p uk-slider-parallax="x: 200,-200">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </li>
          <li class="uk-width-4-5">
            <div class="uk-panel">
              <img src="https://getuikit.com/docs/images/light.jpg" width="800" height="200" alt=""/>
              <div class="uk-position-center uk-text-center">
                <h2 uk-slider-parallax="x: 100,-100">Heading</h2>
                <p uk-slider-parallax="x: 200,-200">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </li>
          <li class="uk-width-4-5">
            <div class="uk-panel">
              <img src="https://getuikit.com/docs/images/photo2.jpg" width="800" height="200" alt=""/>
              <div class="uk-position-center uk-text-center">
                <h2 uk-slider-parallax="x: 100,-100">Heading</h2>
                <p uk-slider-parallax="x: 200,-200">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </li>
          <li class="uk-width-4-5">
            <div class="uk-panel">
              <img src="https://getuikit.com/docs/images/photo3.jpg" width="800" height="200" alt=""/>
              <div class="uk-position-center uk-text-center">
                <h2 uk-slider-parallax="x: 100,-100">Heading</h2>
                <p uk-slider-parallax="x: 200,-200">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </li>
        </ul>
      
        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>
      
      </div>
    );
};

export default Slider4;