import React, { useEffect } from "react";
import CarouselHomePage from "./Carousel/CarouselHomePage";
import Trusted from "./Trusted/Trusted";
import PopularServices from "./PopularServices/PopularServices";
import Outstanding from "./Outstanding/Outstanding";
import Explore from "./Explore/Explore";
import Business from "./Business/Business";
import Testimonials from "./Testimonials/Testimonials";
import Ads from "./Ads/Ads";
import Projects from "./Projects/Projects";
import Guides from "./Guides/Guides";
import CallToAction from "./CallToAction/CallToAction";

const HomePage = () => {
  useEffect(() => {
    const header = document.querySelector(".header");
    const headerLogo = document.querySelector("#fillLogo");
    header?.classList.add(
      "turn__off",
      "turn__off-search",
      "turn__off-categories"
    );
    headerLogo?.setAttribute("fill", "#fff");
    const handleScroll = () => {
      if (window.location.pathname === "/") {
        if (window.scrollY >= 100) {
          header?.classList.remove("turn__off");
          headerLogo?.setAttribute("fill", "#404145");
        } else {
          header?.classList.add(
            "turn__off",
            "turn__off-search",
            "turn__off-categories"
          );
          headerLogo?.setAttribute("fill", "#fff");
        }

        if (window.scrollY >= 200) {
          header?.classList.remove("turn__off-search", "turn__off-categories");
        } else {
          header?.classList.add("turn__off-search", "turn__off-categories");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      headerLogo?.setAttribute("fill", "#404145");
      header?.classList.remove(
        "turn__off",
        "turn__off-search",
        "turn__off-categories"
      );
    };
  }, []);

  return (
    <div>
      <CarouselHomePage />
      <Trusted />
      <PopularServices />
      <Outstanding />
      <Explore />
      <Business />
      <Testimonials />
      <Ads />
      <Projects />
      <Guides />
      <CallToAction />
    </div>
  );
};

export default HomePage;
