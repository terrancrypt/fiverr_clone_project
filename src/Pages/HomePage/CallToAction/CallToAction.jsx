import React from "react";
import { NavLink } from "react-router-dom";
import './CallToAction.css';

const CallToAction = () => {
  return (
    <div className="call__to__action">
      <div className="container my-0 mx-auto px-6 sm:px-8 2xl:px-0 mb-24">
        <div className="call__to__action-content w-full h-full rounded">
          <div className="z-10">
            <h2 className="call__to__action-title text-white pb-10 text-5xl">
              Suddenly it's all so{" "}
              <span className="domaine__font italic">doable</span>.
            </h2>
            <NavLink className="call__to__action-button text-white ">
                Join Fiverr
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
