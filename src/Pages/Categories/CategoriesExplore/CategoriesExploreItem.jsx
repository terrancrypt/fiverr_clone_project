import React from "react";
import { NavLink } from "react-router-dom";

const CategoriesExploreItem = ({ item }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
      {item.dsNhomChiTietLoai?.map((team, index) => {
        return (
          <div className=" w-full px-4" key={index}>
            <div className="bg-white p-4" >
            <img src={team.hinhAnh} alt="" className="w-full mb-4" />
            <h1 className="text-xl font-bold mb-2" >{team.tenNhom}</h1>
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
          </div>
          

        );
      })}
    </div>
  );
};

export default CategoriesExploreItem;
