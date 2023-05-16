import React from "react";
import { NavLink } from "react-router-dom";

const CategoriesExploreItem = ({ item }) => {
  return (
    <div className="flex justify-start items-center space-x-4">
      {item.dsNhomChiTietLoai?.map((team, index) => {
        return (
          <div className="item">
            <img src={team.hinhAnh} alt="" />
            <h1>{team.tenNhom}</h1>
            {team.dsChiTietLoai?.map((detail, index) => {
              return (
                <p key={index}>
                  <NavLink className="detail" to={`/categories/${detail.id}`}>
                    {detail.tenChiTiet}
                  </NavLink>
                </p>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default CategoriesExploreItem;
