import React from "react";
import {
  Default,
  Laptop,
  Mobile,
  Tablet,
} from "../../Layouts/responsiveLayout";
import "./Footer.css";
import FooterDefault from "./FooterDefault";
import FooterMobile from "./FooterMobile";

const Footer = () => {
  return (
    <>
      <Default>
        <FooterDefault />
      </Default>
      <Laptop>
        <FooterDefault />
      </Laptop>
      <Tablet>
        <FooterDefault />
      </Tablet>
      <Mobile>
        <FooterMobile />
      </Mobile>
    </>
  );
};

export default Footer;
