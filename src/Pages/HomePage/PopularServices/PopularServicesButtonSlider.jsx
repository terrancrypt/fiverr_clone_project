import React from "react";

const PopularServicesButtonSlider = ({sliderRef}) => {
  return <div className="popularservices__slider-button">
  <button
    onClick={() => {
      sliderRef.current.slickPrev();
    }}
  >
    <div className="bg-white flex items-center justify-center drop-shadow-lg rounded-full z-40 p-3 absolute top-36 -left-6">
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
    <div className="bg-white flex items-center justify-center drop-shadow-lg rounded-full z-40 p-3 absolute top-36 -right-6">
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
</div>;
};

export default PopularServicesButtonSlider;
