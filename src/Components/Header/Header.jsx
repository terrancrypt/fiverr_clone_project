import React from "react";
import "./Header.css";
import { Default, Laptop, Tablet } from "../../Layouts/responsiveLayout";
import HeaderDefault from "./HeaderDefault";
import HeaderLaptop from "./HeaderLaptop";
import HeaderTablet from "./HeaderTablet";

const Header = () => {
  return (
    <>
    <Default>
      <HeaderDefault/>
    </Default>
    {/* <Laptop>
      <HeaderLaptop/>
    </Laptop>
    <Tablet>
      <HeaderTablet/>
    </Tablet> */}
    </>
  );
};

export default Header;
