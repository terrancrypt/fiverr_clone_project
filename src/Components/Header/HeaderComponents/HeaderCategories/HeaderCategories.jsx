import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { jobsService } from "../../../../services/jobsService";
import HeaderCategoriesItem from "./HeaderCategoriesItem";
import { Skeleton } from "antd";

const HeaderCategories = () => {
  const [categories, setCategories] = useState([]);
  const [isSkeleton, setIsSkeletion] = useState(true);

  const fetchCategories = () => {
    jobsService
      .getMenuCategories()
      .then((res) => {
        setCategories(res.data.content);
        setIsSkeletion(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const renderCategories = () => {
    if (isSkeleton) {
      return <Skeleton.Input active className="py-1"/>;
    } else {
      return categories.map((item, index) => {
        return (
          <li className="my-2.5 z-30 cursor-pointer" key={index}>
            <NavLink
              to={`/title/${item.id}`}
              className="header__categories-item"
            >
              {item.tenLoaiCongViec}
            </NavLink>
            <div className="header__dropdown p-6 shadow bg-white">
              <HeaderCategoriesItem data={item.dsNhomChiTietLoai} />
            </div>
          </li>
        );
      });
    }
  };

  return (
    <div className="header__categories-wrapper">
      <div className="container my-0 mx-auto px-6 sm:px-8 2xl:px-0">
        <div id="categoriesListWrapper" className="relative bg-white">
          <ul
            id="headerCategoriesList"
            className="header__categories-list flex justify-between items-center whitespace-nowrap space-x-5"
          >
            {renderCategories()}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderCategories;
