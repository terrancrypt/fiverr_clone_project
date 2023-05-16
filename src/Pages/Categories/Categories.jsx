import React, { useEffect, useState } from "react";
import CategoriesBanner from "./CategoriesBanner/CategoriesBanner";
import CategoriesTitle from "./CategoriesTitle/CategoriesTitle";
import CategoriesExplore from "./CategoriesExplore/CategoriesExplore";
import { useParams } from "react-router-dom";
import { categoriesServices } from "../../services/categoriesServices";


const Categories = () => {
  let { id } = useParams();
  const [explore, setExplore] = useState([]);
  let fetchExplore = async () => {
    try {
      let result = await categoriesServices.getCategoriesExplore(id);
      setExplore(result.data.content);
    } catch (error) {}
  };
 
  useEffect(() => {
    fetchExplore();
  }, []);
  return <div className="categories">
    <CategoriesBanner/>
    <CategoriesTitle/>
    <CategoriesExplore explore={explore}/>
   
  </div>;
};

export default Categories;
