import React from "react";
import { NavLink } from "react-router-dom";

const HeaderCategoriesItem = ({ data }) => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <div className="w-fit mb-2" key={index}>
            <p className="mb-2">{item.tenNhom}</p>
            <div className="flex flex-col">
              {item.dsChiTietLoai.map((detail, index) => {
                return (
                  <NavLink className="mb-2" key={index}>
                    {detail.tenChiTiet}
                  </NavLink>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default HeaderCategoriesItem;
