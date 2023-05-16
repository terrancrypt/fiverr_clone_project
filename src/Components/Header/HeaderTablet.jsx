import React from "react";
import "./Header.css";
import HeaderLogo from "./HeaderComponents/MainHeader/HeaderLogo";
import HeaderCategories from "./HeaderComponents/HeaderCategories/HeaderCategories";
import HeaderNav from "./HeaderComponents/MainHeader/HeaderNav";
import HeaderSearch from "./HeaderComponents/MainHeader/HeaderSearch";
import HeaderSideBar from "./HeaderComponents/HeaderSideBar/HeaderSideBar";
import { handleShowSideBar } from "./HeaderComponents/HeaderSideBar/SideBarFunction";
import { handleButtonLeft, handleButtonRight } from "./Functions/CategoriesButtonFunctions";
import HeaderCategoriesButton from "./HeaderComponents/HeaderCategories/HeaderCategoriesButton";

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
        <HeaderCategoriesButton/>
      </div>

      {/* ================ SIDE BAR ================ */}
      <HeaderSideBar/>
    </header>
  );
};

export default HeaderTablet;
