import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { categoriesServices } from "../../../services/categoriesServices";
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
                              <NavLink >
                              <a href="#">{detail.tenChiTiet}</a>
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
