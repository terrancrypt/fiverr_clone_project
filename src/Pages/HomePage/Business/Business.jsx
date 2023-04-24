import React from "react";
import './Business.css';
import BusinessItem from "./BusinessItem";
import BusinessImage from "./BusinessImage";

const Business = () => {
  return (
    <div className="business">
      <div className="container my-0 mx-auto px-6 sm:px-8 2xl:px-0 py-24">
        <div className="business__content flex flex-col lg:flex-row justify-start">
            <BusinessItem/>
            <BusinessImage/>
        </div>
      </div>
    </div>
  );
};

export default Business;
