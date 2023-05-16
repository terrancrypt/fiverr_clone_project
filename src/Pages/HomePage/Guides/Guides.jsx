import React from "react";
import { NavLink } from "react-router-dom";
import GuidesItem from "./GuidesItem";
import "./Guides.css";

const Guides = () => {
  return (
    <div className="guides">
      <div className="container my-0 mx-auto px-6 sm:px-8 2xl:px-0 py-24 relative">
        <div className="flex justify-between items-center pb-6">
          <h2>Guides to help you grow</h2>
          <NavLink className="flex items-center text-blue-700 absolute bottom-14 md:static pt-4 pb-2">
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
        <div className="guides__content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 -mx-4">
          <GuidesItem />
        </div>
      </div>
    </div>
  );
};

export default Guides;
