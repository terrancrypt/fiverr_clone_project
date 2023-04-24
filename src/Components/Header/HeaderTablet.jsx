import React from "react";
import "./Header.css";
import HeaderLogo from "./HeaderComponents/MainHeader/HeaderLogo";
import HeaderCategories from "./HeaderComponents/HeaderCategories/HeaderCategories";
import HeaderNav from "./HeaderComponents/MainHeader/HeaderNav";
import HeaderSearch from "./HeaderComponents/MainHeader/HeaderSearch";
import HeaderSideBar from "./HeaderComponents/HeaderSideBar/HeaderSideBar";
import { handleShowSideBar } from "./HeaderComponents/HeaderSideBar/SideBarFunction";
import { handleButtonLeft, handleButtonRight } from "./Funtions/CategoriesButtonFuntions";

const HeaderTablet = () => {
  
  return (
    <header className="header fixed w-full z-50">
      <div className="header__main">
        <div className="header__main-border">
          <div className="header__main-wrapper flex justify-between items-center container my-0 mx-auto px-6 sm:px-8 2xl:px-0 whitespace-nowrap">
          <div className="header__main-sidebarbutton mr-3 pt-2 w-10" onClick={handleShowSideBar}>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
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

      {/* ================ SIDE BAR ================ */}
      <HeaderSideBar/>
    </header>
  );
};

export default HeaderTablet;
