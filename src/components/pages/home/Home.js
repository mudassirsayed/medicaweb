import React, { Component } from "react";
import Carousel from "./collection/Carousel";
import Category from "./category/Category";
import Appbar from "../../reusable/Appbar";

class Home extends Component {
  render() {
    return (
      <>
        <Appbar />
        <Carousel />
        <Category />
      </>
    );
  }
}
export default Home;
