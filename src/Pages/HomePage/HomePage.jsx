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
import { scrollHeader } from "./Funtions/ScrollHeaderFuntion";

const HomePage = () => {
  useEffect(() => {
    /*================ Scroll Header ================*/
    scrollHeader();
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
