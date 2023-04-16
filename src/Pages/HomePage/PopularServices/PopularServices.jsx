import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { items } from "./Data";

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
        },
      },
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="popularservices container my-0 mx-auto px-6 sm:px-8 2xl:px-0 pb-24">
        <h2 className="p-6">Popular professional services</h2>
      <div className="relative">
        <Slider
          ref={sliderRef}
          {...settings}
          className="popularservices__slider"
        >
          {items.map((item, index) => {
            return (
              <NavLink className="popularservices__slider-card" key={index}>
                <h4 className="absolute px-8 py-4 text-white">
                  <small>{item.desc}</small>
                  {item.title}
                </h4>
                <div className="px-4 z-10 rounded">
                  <img className="rounded" src={item.url} alt="slide" />
                </div>
              </NavLink>
            );
          })}
        </Slider>

        <div className="popularservices__slider-button">
          <button
            onClick={() => {
              sliderRef.current.slickPrev();
            }}
          >
            <div className="bg-white flex items-center content-center border shadow rounded-full z-50 p-3 absolute top-1/2 -left-2.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </div>
          </button>
          <button
            id="previous-arrow"
            className="arrow-btn prev"
            onClick={() => {
              sliderRef.current.slickNext();
            }}
          >
            <div className="bg-white flex items-center content-center border shadow rounded-full z-50 p-3 absolute top-1/2 -right-2.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularServices;
