import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import "./carousel.css";

class Carousel extends Component {
  render() {
    return (
      <div>
        <div className="slide-container">
          <Slide>
            <div className="each-slide">
              <div className="carosel_img1">{/* <span>Slide 1</span> */}</div>
            </div>
            <div className="each-slide">
              <div className="carosel_img2">{/* <span>Slide 2</span> */}</div>
            </div>
            <div className="each-slide">
              <div className="carosel_img3">{/* <span>Slide 3</span> */}</div>
            </div>
          </Slide>
        </div>
      </div>
    );
  
}
}
export default Carousel;
