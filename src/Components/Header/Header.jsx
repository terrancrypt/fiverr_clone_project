import React from "react";
import "./Header.css";
import HeaderLogo from "./MainHeader/HeaderLogo";
import HeaderCategories from "./HeaderCategories/HeaderCategories";
import HeaderNav from "./MainHeader/HeaderNav";
import HeaderSearch from "./MainHeader/HeaderSearch";

const Header = () => {
  return (
    <header className="header fixed w-full bg-white">
      <div className="header__main flex justify-between items-center container">
        <HeaderLogo />
        <HeaderSearch />
        <HeaderNav />
      </div>
      <div className="header__categories">
        <HeaderCategories />
      </div>
    </header>
  );
};

export default Header;
