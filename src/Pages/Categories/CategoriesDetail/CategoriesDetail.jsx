import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { categoriesServices } from "../../../services/categoriesServices";
import "./CatrgoriesDetail.css";
import HeaderCategoriesDetail from "./HeaderCategoriesDetail/HeaderCategoriesDetail";
import { Switch } from "antd";

export default function CategoriesDetail() {
  let { id } = useParams();
  const [detail, setDetail] = useState([]);
  const [numberServices, setNumberServices] = useState(0);

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  useEffect(() => {
    let fetchDetail = async () => {
      try {
        let {data} = await categoriesServices.getDetailCategories(id);
        setDetail(data.content);
        setNumberServices(data.content.length)
      } catch (error) {}
    };
    fetchDetail();
  }, []);

  return (
    <div className="categories">
      <div className="container">
        <div className="categories__topbar flex justify-between">
          <HeaderCategoriesDetail />
          <div className="categories-topbar-toggle flex lg:col-span-6 lg:justify-end gap-5 items-center">
            <div className="toggle flex items-center">
              <label>
                <Switch defaultChecked onChange={onChange} />
              </label>
              <span className="ml-3 text-gray-700 font-medium">
                Pro services
              </span>
            </div>
            <div className="toggle flex items-center">
              <label>
                <Switch defaultChecked onChange={onChange} />
              </label>
              <span className="ml-3 text-gray-700 font-medium">
                Local sellers
              </span>
            </div>

            <div className="toggle flex items-center">
              <label>
                <Switch defaultChecked onChange={onChange} />
              </label>
              <span className="ml-3 text-gray-700 font-medium">
                Online sellers
              </span>
            </div>
          </div>
        </div>
        <div className="categories__sort py-3 flex justify-between items-center">
          <div className="categories__number">
            <span className="pre__title">
              <span id="number">{numberServices}</span>
              <span> services available</span>
            </span>
          </div>
 
          <div className="sort__by">
            <span className="pre__title">Sort by</span>
            <select>
              <option>Relevance</option>
              <option value="bestselling">Best Selling</option>
              <option value="newarrival">New Arrivals</option>
            </select>
          </div>
        </div>
        <div className="categories_detail flex justify-start items-center space-x-4 ">
          {detail?.map((item, index) => {
            return (
              <div key={index} className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full mb-4">
                <div className="detail__card bg-white shadow-md rounded-lg p-4 ">
                  <img
                    className="w-full rounded-lg mb-4"
                    src={item.congViec.hinhAnh}
                    alt=""
                  />

                  <div className="card__body">
                    <div className="seller__info flex items-center ">
                      <div className="avatar">
                        <img
                          width="24"
                          height="24"
                          className="avatar__circle"
                          src={item.avatar}
                          alt=""
                        />
                      </div>
                      <div className="name">
                        <h2>{item.tenNguoiTao}</h2>
                        <p>Level {item.congViec.saoCongViec} Seller</p>
                      </div>
                    </div>
                    <div className="service__name">
                      <NavLink className="name__job">
                        {item.congViec.tenCongViec}
                      </NavLink>
                    </div>
                    <div className="rating__star flex items-center">
                      <span className="star">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 1792 1792"
                          width="15"
                          height="15"
                        >
                          <path
                            fill="#ffbe5b"
                            d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
                          ></path>
                        </svg>
                      </span>
                      <span className="star__rate">
                        {item.congViec.saoCongViec}
                      </span>
                      <span className="rating">({item.congViec.danhGia})</span>
                    </div>
                    <div className="detail__footer flex justify-between items-center">
                      <div className="heart__icon">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M14.4469 1.95625C12.7344 0.496875 10.1875 0.759375 8.61561 2.38125L7.99999 3.01562L7.38436 2.38125C5.81561 0.759375 3.26561 0.496875 1.55311 1.95625C-0.409388 3.63125 -0.512513 6.6375 1.24374 8.45312L7.29061 14.6969C7.68124 15.1 8.31561 15.1 8.70624 14.6969L14.7531 8.45312C16.5125 6.6375 16.4094 3.63125 14.4469 1.95625Z"></path>
                        </svg>
                      </div>
                      <div className="price flex">
                        <p className="m-0">
                          Starting at <span>US${item.congViec.giaTien}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
