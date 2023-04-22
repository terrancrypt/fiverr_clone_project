import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { jobsService } from "../../../services/jobsService";
import HeaderCategoriesItem from "./HeaderCategoriesItem";

const HeaderCategories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    jobsService
      .getMenuCategories()
      .then((res) => {
        setCategories(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="header__categories-wrapper">
      <div className="container my-0 mx-auto px-6 sm:px-8 2xl:px-0">
        <div id="categoriesListWrapper" className="relative h-10 overflow-hidden">
          <ul id="headerCategoriesList"  className="header__categories-list flex justify-between items-center whitespace-nowrap space-x-5">
            {categories.map((item, index) => {
              return (
                <li className="my-2" key={index}>
                  <NavLink className="header__categories-item">
                    {item.tenLoaiCongViec}
                  </NavLink>
                  <div className="header__dropdown p-6 shadow bg-white">
                    <HeaderCategoriesItem data={item.dsNhomChiTietLoai} />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderCategories;
