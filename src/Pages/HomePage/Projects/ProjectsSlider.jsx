import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import ProjectsSliderButton from "./ProjectsSliderButton";
import { jobsService } from "../../../services/jobsService";
import { projectsData } from "./projectsData";

const ProjectsSlider = () => {
  let projectsSliderRef = useRef(null);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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


  let renderJobs = () =>{
    return projectsData.map((item, index)=>{
      return <div className="projects__slider-item" key={index}>
      <div className="bg-white border border-gray-200 rounded-lg shadow">
        <NavLink className="w-10 h-10" href="#">
          <img
            className="projects__slider-image rounded-t-lg object-cover w-full"
            src={item.urlImage}
            alt=""
          />
        </NavLink>
        <div className="flex justify-start items-center py-4 pl-4">
          <img
            className=" rounded-full"
            src={item.urlAvatar}
            alt=""
          />
          <div className="pl-3">
            <NavLink className="projects__slider-heading block text-sm">
             {item.title}
            </NavLink>
            <NavLink className="projects__slider-desc text-sm">
             by {item.author}
            </NavLink>
          </div>
        </div>
      </div>
    </div>
    })
  }

  return (
    <>
      <Slider
        ref={projectsSliderRef}
        {...settings}
        className="projects__slider -mx-4"
      >
        {renderJobs()}
      </Slider>
      <ProjectsSliderButton projectsSliderRef={projectsSliderRef} />
    </>
  );
};

export default ProjectsSlider;
