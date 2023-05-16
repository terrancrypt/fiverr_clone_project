import React from "react";
import { NavLink } from "react-router-dom";

import "./CategoriesEplore.css";
import CategoriesExploreItem from "./CategoriesExploreItem";

export default function CategoriesExplore({explore}) {
  
  return (
    <div className="categories__explore">
      {explore.map((item, index) => {
        return (
          <div key={index}>
            <div className="container">
              <h1>Explore {item.tenLoaiCongViec}</h1>
             <CategoriesExploreItem item={item}/>
            </div>
          </div>
        );
      })}
    </div>
  );
}
