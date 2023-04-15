import React from "react";

const Trusted = () => {
  return (
    <div className="homepage__trusted ">
      <div className="trusted__content container h-24 mb-24 flex justify-center items-center space-x-10">
        <span>Trusted by:</span>
        <ul className="flex justify-center items-center space-x-10">
          <li>
            <img
              className="object-cover"
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/meta.99a0dda.png"
              alt=""
            />
          </li>
        </ul>
      </div>
    </div>

  
  );
};

export default Trusted;
