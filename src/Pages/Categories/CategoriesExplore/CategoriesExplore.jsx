import React from "react";


import "./CategoriesEplore.css";
import CategoriesExploreItem from "./CategoriesExploreItem";

export default function CategoriesExplore({explore}) {
  
  return (
    <div className="categories__explore">
      {explore.map((item, index) => {
        return (
          <div key={index}>
            <div className="container mx-4 ">
              <h1 className="text-2xl font-bold mb-4" >Explore {item.tenLoaiCongViec}</h1>
             <CategoriesExploreItem item={item}/>
            </div>
          </div>
        );
      })}
    </div>
  );
}
