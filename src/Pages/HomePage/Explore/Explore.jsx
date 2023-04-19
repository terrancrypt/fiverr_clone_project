import React from "react";
import ExploreItem from "./ExploreItem";
import './Explore.css';

const Explore = () => {
  return <div className="explore">
    <div className="container my-0 mx-auto px-6 sm:px-8 2xl:px-0 py-24">
        <h2 className="mb-10 pb-6">You need it, we've got it</h2>
        <div className="explore__content grid grid-cols-5">
            <ExploreItem/>
        </div>
    </div>
  </div>;
};

export default Explore;
