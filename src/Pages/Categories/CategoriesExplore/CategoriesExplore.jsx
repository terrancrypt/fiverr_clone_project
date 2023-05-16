import React from "react";
import { NavLink } from "react-router-dom";

import "./CategoriesEplore.css";

export default function CategoriesExplore({explore}) {
  
  return (
    <div className="categories__explore">
      {explore.map((item, index) => {
        return (
          <div key={index}>
            <div className="container">
              <h1>Explore {item.tenLoaiCongViec}</h1>
              {item.dsNhomChiTietLoai?.map((team,index)=>{
                return(
                  <div key={index} className="content">
                    <div className="item">
                      <img src={team.hinhAnh} alt="" />
                      <h1>{team.tenNhom}</h1>
                      {team.dsChiTietLoai?.map((detail,index)=>{
                        return (
                          <p key={index}>
                              <NavLink to={`/categories/${detail.id}`} >
                             {detail.tenChiTiet}
                              </NavLink>
                          </p>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
