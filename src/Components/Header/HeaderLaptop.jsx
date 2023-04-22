import React from "react";
import "./Header.css";
import HeaderLogo from "./MainHeader/HeaderLogo";
import HeaderCategories from "./HeaderCategories/HeaderCategories";
import HeaderNav from "./MainHeader/HeaderNav";
import HeaderSearch from "./MainHeader/HeaderSearch";

const HeaderLaptop = () => {
  let handleButtonRight = () => {
    let headerCategories = document.getElementById("headerCategoriesList");
    let headerCategoriesWrapper = document.getElementById(
      "categoriesListWrapper"
    );
    console.log(headerCategories.clientWidth);
    console.log(headerCategoriesWrapper.clientWidth);
    let widthList = headerCategories.clientWidth;
    let widthHeader = headerCategoriesWrapper.clientWidth;
    let widthChange = widthList - widthHeader;
    console.log(widthChange);
    let widthChangedown = widthChange * -1;
    headerCategories.style.transform = `translateX(${widthChangedown})`;
  };

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
            className="categories__button-right absolute right-0 top-0 py-2 px-7"
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
        </div>
      </div>
    </header>
  );
};

export default HeaderLaptop;
