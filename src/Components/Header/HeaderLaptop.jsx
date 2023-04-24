import React from "react";
import "./Header.css";
import HeaderLogo from "./HeaderComponents/MainHeader/HeaderLogo";
import HeaderCategories from "./HeaderComponents/HeaderCategories/HeaderCategories";
import HeaderNav from "./HeaderComponents/MainHeader/HeaderNav";
import HeaderSearch from "./HeaderComponents/MainHeader/HeaderSearch";
import { handleButtonLeft, handleButtonRight } from "./Funtions/CategoriesButtonFuntions";

const HeaderLaptop = () => {

  return (
    <header className="header fixed w-full z-50">
      <div className="header__main">
        <div className="header__main-border">
          <div className="header__main-wrapper flex justify-between items-center container my-0 mx-auto px-6 sm:px-8 2xl:px-0">
            <HeaderLogo />
            <HeaderSearch />
            <HeaderNav />
          </div>
        </div>
      </div>
      <div className="header__categories">
        <HeaderCategories />
        <div className="header__categories-button">
          <div
            onClick={handleButtonRight}
            className="categories__button-right block absolute right-0 top-0 py-2 px-7"
          >
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
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
          <div
            onClick={handleButtonLeft}
            className="categories__button-left hidden absolute left-0 top-0 py-2 px-7"
          >
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
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderLaptop;
