import React from "react";
import "./Header.css";
import HeaderLogo from "./HeaderComponents/MainHeader/HeaderLogo";
import HeaderCategories from "./HeaderComponents/HeaderCategories/HeaderCategories";
import HeaderNav from "./HeaderComponents/MainHeader/HeaderNav";
import HeaderSearch from "./HeaderComponents/MainHeader/HeaderSearch";

const HeaderLaptop = () => {
  let handleButtonRight = () => {
    // DOM lấy thẻ div bọc ngoài header categories và thẻ div chứa list categories
    let headerCategoriesList = document.getElementById("headerCategoriesList");
    let headerCategoriesWrapper = document.getElementById(
      "categoriesListWrapper"
    );
    let categorisListButtonRight = document.querySelector(
      ".header__categories .categories__button-right"
    );
    let categorisListButtonLeft = document.querySelector(
      ".header__categories .categories__button-left"
    );

    // Sau khi DOM lấy thì lần lượt lấy chiều ngang của thẻ div cha và thẻ div con chứa list categories
    let widthList = headerCategoriesList.clientWidth;
    let widthHeader = headerCategoriesWrapper.clientWidth;

    // Sau khi có chiều ngang của 2 thẻ thì lúc này chắc chắc thẻ div list dài hơn thẻ div cha mới hiện nút button ấn sang phải, nên ta lấy chiều dài của thẻ div list trừ đi chiều dài của thẻ div cha sẽ biết được cần phải di chuyển thẻ div list bao nhiêu px
    let widthChange = widthList - widthHeader;

    // Có được chiều dài cần thay đổi thì chuyển nó thành số âm để nó di chuyển sang trái và căn chỉnh thêm pixel để giao diện đẹp hơn
    let widthChangedown = widthChange * -1 - 30;

    // Cuối cùng thay đổi lên giao diện và xóa button right và chuyển nó thành button left
    headerCategoriesList.style.transform = `translate(${widthChangedown}px)`;
    categorisListButtonRight.classList.replace("block", "hidden");
    categorisListButtonLeft.classList.replace("hidden","block");
  };

  let handleButtonLeft = () =>{
    // DOM lấy thẻ div chứa list categories
    let headerCategoriesList = document.getElementById("headerCategoriesList");
    
    let categorisListButtonRight = document.querySelector(
      ".header__categories .categories__button-right"
    );
    let categorisListButtonLeft = document.querySelector(
      ".header__categories .categories__button-left"
    );

    // Vì là set thay đổi lại giao diện như cũ nên bớt rườm rà hơn, chỉ cần cho giao diện quay lại như ban đầu là được
    headerCategoriesList.style.transform = `translate(0px)`;
    categorisListButtonRight.classList.replace("hidden", "block");
    categorisListButtonLeft.classList.replace("block","hidden");

  }

  return (
    <header className="header fixed w-full z-50">
      <div className="header__main">
        <div className="header__main-border">
          <div className="header__main-wrapper flex justify-between items-center container my-0 mx-auto px-6 sm:px-8 2xl:px-0">
            <HeaderLogo />
            <HeaderSearch />
            <HeaderNav />
          </div>
        </div>
      </div>
      <div className="header__categories">
        <HeaderCategories />
        <div className="header__categories-button">
          <div
            onClick={handleButtonRight}
            className="categories__button-right block absolute right-0 top-0 py-2 px-7"
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
            className="categories__button-left hidden absolute left-0 top-0 py-2 px-7"
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
      </div>
    </header>
  );
};

export default HeaderLaptop;
