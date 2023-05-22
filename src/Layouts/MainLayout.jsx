import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const MainLayout = ({ Component }) => {

  return (
    <div className="min-h-screen h-full flex flex-col">
      <Header />
      <div className="flex-grow">
        <Component />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
