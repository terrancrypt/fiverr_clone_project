import React, { useState } from "react";
import "./CarouselHomePage.css";
import { useNavigate } from "react-router-dom";

const CarouselHomePage = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const searchSubmit = (event) => {
    event.preventDefault();
    navigate(`/search/${searchValue}`);
  };

  return (
    <div className="homepage__carousel flex items-center justify-start">
      <div className="container my-0 mx-auto px-6 sm:px-8 2xl:px-0 py-52">
        <div className="homepage__carousel-content space-y-7">
          <h1>
            <span>Find the right</span>{" "}
            <i className="domaine__font">freelance service</i>, right away
          </h1>
          <form onSubmit={searchSubmit}>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only"
            >
              Search
            </label>
            <div className="relative">
              <div className="homepage__carousel-icon absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <input
                type="search"
                id="default-search"
                className="block w-full p-2.5 pl-10 border border-gray-300 rounded bg-gray-50 focus:ring-blue-500 focus:border-black"
                placeholder="Try 'building moblie app'"
                required
                onChange={(event) => setSearchValue(event.target.value)}
              />
              <button
                type="submit"
                className="text-white absolute right-0 bottom-0 h-full rounded-r px-4"
              >
                Search
              </button>
            </div>
          </form>

          <div className="popular__links text-white space-x-3">
            <span>Popular: </span>
            <a href="#">Website Design</a>
            <a href="#">Wordpress</a>
            <a href="#">Logo Design</a>
            <a href="#">AI Services</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselHomePage;
