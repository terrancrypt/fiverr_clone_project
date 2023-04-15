import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { categoriesService } from "../../../services/categoriesService";
import HeaderCategoriesItem from "./HeaderCategoriesItem";

const HeaderCategories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    categoriesService
      .getMenuCategories()
      .then((res) => {
        setCategories(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <ul className="flex justify-between items-center">
        {categories.map((item, index) => {
          return (
            <li className="my-2" key={index}>
              <NavLink className="header__categories-item">{item.tenLoaiCongViec}</NavLink>
              <div className="header__dropdown p-6 shadow bg-white">
                <HeaderCategoriesItem data={item.dsNhomChiTietLoai}/>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HeaderCategories;
