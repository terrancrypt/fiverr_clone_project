import React from "react";
import "./Header.css";
import HeaderLogo from "./HeaderComponents/MainHeader/HeaderLogo";
import HeaderCategories from "./HeaderComponents/HeaderCategories/HeaderCategories";
import HeaderNav from "./HeaderComponents/MainHeader/HeaderNav";
import HeaderSearch from "./HeaderComponents/MainHeader/HeaderSearch";
import { handleButtonLeft, handleButtonRight } from "./Functions/CategoriesButtonFunctions";
import HeaderCategoriesButton from "./HeaderComponents/HeaderCategories/HeaderCategoriesButton";

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
        <HeaderCategoriesButton/>
      </div>
    </header>
  );
};

export default HeaderLaptop;
