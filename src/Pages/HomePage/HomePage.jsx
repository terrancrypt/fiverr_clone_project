import React, { useEffect } from "react";
import "./HomePage.css";
import CarouselHomePage from "./Carousel/CarouselHomePage";
import Trusted from "./Trusted/Trusted";
import PopularServices from "./PopularServices/PopularServices";

const HomePage = () => {
  useEffect(() => {
    /*================ Scroll Header ================*/
    let scrollHeader = () => {
      // Remove Item
      const headerMain = document.querySelector(".header");
      const HeaderCategories = document.querySelector(".header__categories");
      const headerCategoriesContainer = document.querySelector(
        ".header__categories .container"
      );
      console.log(headerMain);

      headerMain.classList.replace("bg-white", "bg-transparent");
      headerMain.classList.add("turn__off");
      HeaderCategories.classList.add("turn__off");
      headerCategoriesContainer.classList.add("hidden");

      window.addEventListener("scroll", function () {
        if (this.scrollY >= 200) {
          headerMain.classList.replace( "bg-transparent", "bg-white");
          headerMain.classList.remove("turn__off");
          HeaderCategories.classList.remove("turn__off");
          headerCategoriesContainer.classList.remove("hidden");
        } else {
          headerMain.classList.replace("bg-white", "bg-transparent");
          headerMain.classList.add("turn__off");
          HeaderCategories.classList.add("turn__off");
          headerCategoriesContainer.classList.add("hidden");
        }
      });
    };
    scrollHeader();
  }, []);

  return (
    <>
      <div className="homepage__carousel flex items-center justify-start">
        <CarouselHomePage />
      </div>
      <Trusted />
      <PopularServices />
    </>
  );
};

export default HomePage;
