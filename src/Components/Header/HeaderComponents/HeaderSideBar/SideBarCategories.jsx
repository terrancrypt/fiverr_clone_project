import React, { useEffect, useState } from "react";
import { jobsService } from "../../../../services/jobsService";
import { handleCategoriesItem } from "./SideBarFunction";
import { NavLink } from "react-router-dom";

const SideBarCategories = () => {
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
    <ul className="sidebar__menu-categories hidden pl-4 whitespace-nowrap">
      {categories.map((item, index) => {
        return (
          <li className="sidebar__menu-categories-list" key={index}>
            <div
              className="flex items-center justify-between"
              onClick={() => handleCategoriesItem(index)}
            >
              <span>{item.tenLoaiCongViec}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <div className="pl-6 sidebar__menu-categories--item hidden">
              {item.dsNhomChiTietLoai.map((job, id) => {
                return (
                  <ul key={id}>
                    {job.dsChiTietLoai.map((jobtitle, jobId) => {
                      return (
                        <NavLink className="block" key={jobId}>
                          {jobtitle.tenChiTiet}
                        </NavLink>
                      );
                    })}
                  </ul>
                );
              })}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default SideBarCategories;
