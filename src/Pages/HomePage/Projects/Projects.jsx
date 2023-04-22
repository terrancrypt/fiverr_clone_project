import React from "react";
import ProjectsSlider from "./ProjectsSlider";
import "./Projects.css";
import { NavLink } from "react-router-dom";

const Projects = () => {
  return (
    <div className="projects">
      <div className="container my-0 mx-auto px-6 sm:px-8 2xl:px-0 py-24">
        <div className="projects__title flex justify-between pb-6">
          <h2>Inspiring work made on Fiverr</h2>
          <NavLink className="flex items-center text-blue-700 pt-4">
            <span className="pr-2">See more</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3 mt-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </NavLink>
        </div>
        <div className="projects__content relative">
          <ProjectsSlider />
        </div>
      </div>
    </div>
  );
};

export default Projects;
