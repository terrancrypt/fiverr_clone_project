import React from "react";
import { dataGuides } from "./dataGuides";
import { NavLink } from "react-router-dom";

const GuidesItem = () => {
  return (
    <>
      {dataGuides.map((item, index) => {
        return (
          <div className="guides__item px-4 pb-6" key={index}>
            <div className="bg-transparent rounded">
              <NavLink href="#">
                <img
                  className="rounded-t-lg"
                  src={item.urlImage}
                  alt=""
                />
              </NavLink>
              <div className="mt-4">
                <NavLink className="guides__item-title block"><h6>{item.title}</h6></NavLink>
                <NavLink className="guides__item-desc ">{item.desc}</NavLink>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default GuidesItem;
