import React, { useRef } from "react";
import Slider from "react-slick";
import "./Testimonials.css";
import { testimonialsData } from "./testimonialsData";
import TestimonialsModal from "./TestimonialsModal";

const Testimonials = () => {
  const testimoialsSliderRef = useRef(null);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="testimonials">
      <div className="container my-0 mx-auto px-6 sm:px-8 2xl:px-0 py-24">
        <div className="testimonials__content relative">
          <Slider ref={testimoialsSliderRef} {...settings}>
            {testimonialsData.map((item, index) => {
              return (
                <div className="testimonials__item" key={index}>
                  <TestimonialsModal item={item} />
                  <div className="testimonials__item-text w-3/5 pl-16 pr-12">
                    <h5 className="flex justify-start items-start pb-4">
                      {item.title}
                      <span className="ml-3 border-l">
                        <img className="ml-2 h-9" src={item.urlLogo} alt="" />
                      </span>
                    </h5>
                    <blockquote>{item.blockquote}</blockquote>
                  </div>
                </div>
              );
            })}
          </Slider>

          <div className="testimonials__content-button">
            <button
              onClick={() => {
                testimoialsSliderRef.current.slickPrev();
              }}
            >
              <div className="bg-white flex items-center justify-center drop-shadow-lg rounded-full z-50 p-3 absolute top-24 -left-6">
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
                testimoialsSliderRef.current.slickNext();
              }}
            >
              <div className="bg-white flex items-center justify-center drop-shadow-lg rounded-full z-50 p-3 absolute top-24 -right-6">
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
    </div>
  );
};

export default Testimonials;
