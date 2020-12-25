import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import category1 from "../../../../images/categoryy1.jpg";
import category2 from "../../../../images/category2.jpg";
import category3 from "../../../../images/category3.jpg";
import category4 from "../../../../images/category4.jpg";
import category5 from "../../../../images/category5.jpg";
import APIService from '../../../../services/APIService';
import { BASE_URL, COLLECTIONS } from "../../../../resources/APIEndpoints";

import "./category.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 650 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 650, min: 0 },
    items: 2,
  },
};

export default function Category(props){
    return (
      <>
        <h3 className="text-center mb-3 mt-3">Shop By Category</h3>
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          className="ml-4"
        >
          <div>
            <div className="card cardbox">
              <img className="card-img-top" src={category1} alt="img1" />
              <div className="card-body">
                <h6>Ostomy Care </h6>
              </div>
            </div>
          </div>
          <div>
            <div className="card cardbox">
              <img className="card-img-top" src={category2} alt="img1" />
              <div className="card-body">
                <h6>CPAP/Bi-PAP </h6>
              </div>
            </div>
          </div>
          <div>
            <div className="card cardbox">
              <img className="card-img-top" src={category3} alt="img1" />
              <div className="card-body">
                <h6>Foley Catheter </h6>
              </div>
            </div>
          </div>
          <div>
            <div className="card cardbox">
              <img className="card-img-top" src={category5} alt="img1" />
              <div className="card-body">
                <h6>Urethral Catheter </h6>
              </div>
            </div>
          </div>
          <div>
            <div className="card cardbox">
              <img className="card-img-top" src={category4} alt="img1" />
              <div className="card-body">
                <h6>Examination Gloves</h6>
              </div>
            </div>
          </div>
        </Carousel>
      </>
    );
  }

