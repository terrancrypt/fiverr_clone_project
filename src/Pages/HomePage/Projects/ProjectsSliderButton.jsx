import React from 'react'

const ProjectsSliderButton = ({projectsSliderRef}) => {
  return (
    <div className="testimonials__content-button">
    <button
      onClick={() => {
        projectsSliderRef.current.slickPrev();
      }}
    >
      <div className="bg-white flex items-center justify-center drop-shadow-lg rounded-full z-50 p-3 absolute top-32 -left-2">
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
        projectsSliderRef.current.slickNext();
      }}
    >
      <div className="bg-white flex items-center justify-center drop-shadow-lg rounded-full z-50 p-3 absolute top-32 -right-4">
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
  )
}

export default ProjectsSliderButton