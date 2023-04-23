import React from "react";
import "./Header.css";
import { Default, Laptop, Mobile, Tablet } from "../../Layouts/responsiveLayout";
import HeaderDefault from "./HeaderDefault";
import HeaderLaptop from "./HeaderLaptop";
import HeaderTablet from "./HeaderTablet";
import HeaderMobile from "./HeaderMobile";

const Header = () => {
  return (
    <>
    <Default>
      <HeaderDefault/>
    </Default>
    <Laptop>
      <HeaderLaptop/>
    </Laptop>
    <Tablet>
      <HeaderTablet/>
    </Tablet>
    <Mobile>
      <HeaderMobile/>
    </Mobile>
    </>
  );
};

export default Header;
