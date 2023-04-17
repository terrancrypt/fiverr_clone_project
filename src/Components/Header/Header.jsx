import React from "react";
import "./Header.css";
import HeaderLogo from "./MainHeader/HeaderLogo";
import HeaderCategories from "./HeaderCategories/HeaderCategories";
import HeaderNav from "./MainHeader/HeaderNav";
import HeaderSearch from "./MainHeader/HeaderSearch";

const Header = () => {
  return (
    <header className="header fixed w-full z-50">
      <div className="header__main">
        <div className="header__main-wrapper flex justify-between items-center container my-0 mx-auto px-6 sm:px-8 2xl:px-0">
          <HeaderLogo />
          <HeaderSearch />
          <HeaderNav />
        </div>
      </div>
      <div className="header__categories">
        <HeaderCategories />
      </div>
    </header>
  );
};

export default Header;
