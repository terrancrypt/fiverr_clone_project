import React from "react";
import { Default, Laptop, Mobile, Tablet } from "../../../Layouts/responsiveLayout";
import AdsDefault from "./AdsDefault";
import AdsTablet from "./AdsTablet";
import AdsMobile from "./AdsMobile";
const Ads = () => {
  return (
    <>
      <Default>
        <AdsDefault />
      </Default>
      <Laptop>
        <AdsDefault />
      </Laptop>
      <Tablet>
        <AdsTablet />
      </Tablet>
      <Mobile>
        <AdsMobile/>
      </Mobile>
    </>
  );
};

export default Ads;
