import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { items } from "./Data";
import PopularServicesButtonSlider from "./PopularServicesButtonSlider";

const PopularServices = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="popularservices">
      <div className="container my-0 mx-auto px-6 sm:px-8 2xl:px-0 pb-24">
        <h2 className="pb-6">Popular professional services</h2>
        <div className="relative">
          <Slider
            ref={sliderRef}
            {...settings}
            className="popularservices__slider -px-4"
          >
            {items.map((item, index) => {
              return (
                <NavLink className="popularservices__slider-card" key={index}>
                  <h4 className="absolute px-8 py-4 text-white z-20 ">
                    <small>{item.desc}</small>
                    {item.title}
                  </h4>
                  <div className="px-4 z-10 rounded hover:opacity-80 transition-all duration-300 ease-in-out">
                    <img className="rounded w-full object-cover" src={item.url} alt="slide" />
                  </div>
                </NavLink>
              );
            })}
          </Slider>
          <PopularServicesButtonSlider sliderRef={sliderRef} />
        </div>
      </div>
    </div>
  );
};

export default PopularServices;
