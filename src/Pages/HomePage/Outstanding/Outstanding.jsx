import React from "react";
import OutstandingItem from "./OutstandingItem";
import "./Outstanding.css";
import OutstandingModal from "./OutstandingModal";

const Outstanding = () => {

  return (
    <div className="outstanding">
      <div className="container my-0 mx-auto px-6 sm:px-8 2xl:px-0 py-24">
        <div className="outstanding__content flex justify-between">
          <div className="outstanding__text pl-4">
            <h2 className="pb-6">
              A whole world of freelance talent at your fingertips
            </h2>
            <ul>
                <OutstandingItem/>
              </ul>
          </div>
          <div className="outstanding__video flex items-center justify-center">
            <OutstandingModal/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Outstanding;
