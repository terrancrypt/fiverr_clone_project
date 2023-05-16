import React from "react";
import { handleButtonLeft, handleButtonRight } from "../../Functions/CategoriesButtonFunctions";

const HeaderCategoriesButton = () => {
  return (
    <div className="header__categories-button">
      <div
        onClick={handleButtonRight}
        className="categories__button-right z-50 block absolute right-0 top-0 py-2 px-7"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
      <div
        onClick={handleButtonLeft}
        className="categories__button-left z-50 hidden absolute left-0 top-0 py-2 px-7"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeaderCategoriesButton;
