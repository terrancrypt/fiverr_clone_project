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
        <ul className="flex justify-between items-center">
          {categories.map((item, index) => {
            return (
              <li className="my-2" key={index}>
                <NavLink  to={`/title/${item.id}`} className="header__categories-item ">
                  {item.tenLoaiCongViec}
                </NavLink>
                <div className="header__dropdown p-6 shadow bg-white ">
                  <HeaderCategoriesItem data={item.dsNhomChiTietLoai} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default HeaderCategories;
