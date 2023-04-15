import React from "react";
import './HomePage.css';
import CarouselHomePage from "./Carousel/CarouselHomePage";
import Trusted from "./Trusted/Trusted";

const HomePage = () => {

  /*================ Scrool Header =============k===*/
  

  return (
    <>
    <div className="homepage__carousel flex items-center justify-start">
    <CarouselHomePage/>
    </div>
    <Trusted/>
    </>
  );
};

export default HomePage;
