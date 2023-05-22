import React, { useEffect, useState } from "react";
import { categoriesServices } from "../../services/categoriesServices";
import { useParams } from "react-router-dom";
import HeaderCategoriesDetail from "../../Components/CategoriesPage/HeaderCategoriesDetail/HeaderCategoriesDetail";
import CategoriesContent from "../../Components/CategoriesPage/CategoriesContent/CategoriesContent";
import { Skeleton } from "antd";

const SearchPage = () => {
  const { param } = useParams();
  const [dataJobs, setDataJobs] = useState([]);
  const [numberServices, setNumberServices] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchJobs = async () => {
    try {
      const { data } = await categoriesServices.getCategoriesSearch(param);
      setDataJobs(data.content);
      setNumberServices(data.content.length);
      setLoading(false);
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [param]);

  return (
    <div className="container mt-[150px]">
      <p className="text-black font-normal text-[38px]">
        Search result for <span className="font-bold">{param}</span>
      </p>
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
        <Skeleton active className="py-4" />
      ) : (
        <CategoriesContent dataJobs={dataJobs} />
      )}
    </div>
  );
};

export default SearchPage;
