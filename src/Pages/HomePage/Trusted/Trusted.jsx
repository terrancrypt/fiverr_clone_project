import React from "react";

const Trusted = () => {
  let arrImage = [
    {
      alt: "Meta",
      url: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/meta2x.b364aec.png",
    },
    {
      alt: "Google",
      url: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/google2x.4fa6c20.png",
    },
    {
      alt: "Netflix",
      url: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/netflix2x.6b36ad6.png",
    },
    {
      alt: "Paypal",
      url: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/paypal2x.d2fa54d.png",
    },
  ];

  let renderImage = () => {
    return arrImage.map((image, index) => {
      return (
        <li className="block h-auto" key={index}>
          <img className="w-20 h-auto" src={image.url} alt={image.alt} />
        </li>
      );
    });
  };

  return (
    <div className="homepage__trusted ">
      <div className="trusted__content container my-0 mx-auto px-6 sm:px-8 2xl:px-0 h-24 mb-24 flex justify-center items-center space-x-14">
        <span className="hidden lg:block">Trusted by:</span>
        <ul className="flex justify-center items-center space-x-10">
          {renderImage()}
        </ul>
      </div>
    </div>
  );
};

export default Trusted;
