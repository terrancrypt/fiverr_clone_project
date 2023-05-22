import React, { useRef } from "react";
import Slider from "react-slick";
import "./Testimonials.css";
import { testimonialsData } from "./testimonialsData";
import TestimonialsModal from "./TestimonialsModal";
import TestimonialsButtonSlider from "./TestimonialsButtonSlider";

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
      <div className="container my-0 mx-auto px-6 sm:px-8 2xl:px-0 pt-16 lg:pt-24">
        <div className="testimonials__content relative">
          <Slider ref={testimoialsSliderRef} {...settings}>
            {testimonialsData.map((item, index) => {
              return (
                <div className="testimonials__item flex-col lg:flex-row" key={index}>
                  <TestimonialsModal item={item} />
                  <div className="testimonials__item-text w-full lg:w-3/5 pt-6 lg:pt-0 pl-4 lg:pl-16 pr-0 lg:pr-12">
                    <h5 className="flex flex-col lg:flex-row justify-start items-start pb-4 whitespace-nowrap lg:whitespace-pre-wrap">
                      {item.title}
                      <span className="lg:ml-3 lg:border-l">
                        <img className="lg:ml-2 h-9" src={item.urlLogo} alt="" />
                      </span>
                    </h5>
                    <blockquote>{item.blockquote}</blockquote>
                  </div>
                </div>
              );
            })}
          </Slider>

          <TestimonialsButtonSlider testimoialsSliderRef={testimoialsSliderRef}/>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
