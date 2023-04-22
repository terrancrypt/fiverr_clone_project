import React from "react";
import "./Header.css";
import { Default, Laptop } from "../../Layouts/responsiveLayout";
import HeaderDefault from "./HeaderDefault";
import HeaderLaptop from "./HeaderLaptop";

const Header = () => {
  return (
    <>
    <Default>
      <HeaderDefault/>
    </Default>
    <Laptop>
      <HeaderLaptop/>
    </Laptop>
    </>
  );
};

export default Header;
