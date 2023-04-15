import React from "react";
import './HomePage.css';
import CarouselHomePage from "./Carousel/CarouselHomePage";

const HomePage = () => {
  return (
    <div className="homepage__carousel flex items-center justify-start">
    <CarouselHomePage/>
    </div>
  );
};

export default HomePage;
