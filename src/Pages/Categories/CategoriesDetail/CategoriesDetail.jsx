import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { categoriesServices } from "../../../services/categoriesServices";
import "./CategoriesDetail.css";
import HeaderCategoriesDetail from "../../../Components/CategoriesPage/HeaderCategoriesDetail/HeaderCategoriesDetail";
import CategoriesContent from "../../../Components/CategoriesPage/CategoriesContent/CategoriesContent";
import { Skeleton } from "antd";

export default function CategoriesDetail() {
  let { id } = useParams();
  const [detail, setDetail] = useState([]);
  const [numberServices, setNumberServices] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let fetchDetail = async () => {
      try {
        let { data } = await categoriesServices.getDetailCategories(id);
        setDetail(data.content);
        setNumberServices(data.content.length);
        setLoading(false)
      } catch (error) {}
    };
    fetchDetail();
  }, [id]);

  return (
    <div className="categories mt-[150px]">
      <div className="container">
        <HeaderCategoriesDetail />
        <div className="categories__sort py-3 flex justify-between items-center">
          <div className="categories__number">
            <span className="pre__title">
              <span id="number">{numberServices}</span>
              <span> services available</span>
            </span>
          </div>

          <div className="sort__by">
            <span className="pre__title">Sort by:</span>
            <select>
              <option>Relevance</option>
              <option value="bestselling">Best Selling</option>
              <option value="newarrival">New Arrivals</option>
            </select>
          </div>
        </div>
        {loading ? (
          <Skeleton active className="py-4"/>
        ) : (
          <CategoriesContent dataJobs={detail} />
        )}
      </div>
    </div>
  );
}
