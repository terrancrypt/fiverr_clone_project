import React from "react";
import { dataExplore } from "./dataExplore";
import { NavLink } from "react-router-dom";

const ExploreItem = () => {
  return (
    <>
      {dataExplore.map((item, index) => {
        return (
          <NavLink key={index} className="explore__item text-center flex flex-col mb-14 justify-center items-center space-y-4">
            <div className="explore__item-img w-12 h-12 relative">
              <img
              className="block"
                src={item.icon}
                alt={item.title}
              />
            </div>
            <span>
            {item.title}
            </span>
          </NavLink>
        );
      })}
    </>
  );
};

export default ExploreItem;
