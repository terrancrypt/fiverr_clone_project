import React from "react";
import CategoriesBanner from "./CategoriesBanner/CategoriesBanner";
import CategoriesTitle from "./CategoriesTitle/CategoriesTitle";
import CategoriesExplore from "./CategoriesExplore/CategoriesExplore";

const Categories = () => {
  return <div className="categories">
    <CategoriesBanner/>
    <CategoriesTitle/>
   <CategoriesExplore/>
  </div>;
};

export default Categories;
