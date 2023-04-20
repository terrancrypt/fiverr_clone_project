import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import ProjectsSliderButton from "./ProjectsSliderButton";

const ProjectsSlider = () => {
  let projectsSliderRef = useRef(null);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
  };
  return (
    <>
      <Slider ref={projectsSliderRef} {...settings} className="projects__slider">
        <div className="projects__slider-item">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <NavLink className="w-10 h-10" href="#">
              <img
                className="rounded-t-lg"
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_2.0/v1/attachments/generic_asset/asset/d51cf66f8a7026eb56a8c8e6b6793b24-1617027896306/lamonastudio-img.png"
                alt=""
              />
            </NavLink>
            <div className="flex justify-start items-center py-4 pl-4">
              <img
                className=" rounded-full"
                src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/706891a4cc08826adca2819e14129aaf-1583755607494/5a706f4e-9f73-4ebc-97ff-9d2ef16bf28c.jpg"
                alt=""
              />
              <div className="pl-3">
                <NavLink className="projects__slider-heading block text-sm">
                  Animated GIFs
                </NavLink>
                <NavLink className="projects__slider-desc text-sm">
                  by lamonastudio
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="projects__slider-item">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <NavLink className="w-10 h-10" href="#">
              <img
                className="rounded-t-lg"
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_2.0/v1/attachments/generic_asset/asset/d51cf66f8a7026eb56a8c8e6b6793b24-1617027896306/lamonastudio-img.png"
                alt=""
              />
            </NavLink>
            <div className="flex justify-start items-center py-4 pl-4">
              <img
                className=" rounded-full"
                src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/706891a4cc08826adca2819e14129aaf-1583755607494/5a706f4e-9f73-4ebc-97ff-9d2ef16bf28c.jpg"
                alt=""
              />
              <div className="pl-3">
                <NavLink className="projects__slider-heading block text-sm">
                  Animated GIFs
                </NavLink>
                <NavLink className="projects__slider-desc text-sm">
                  by lamonastudio
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="projects__slider-item">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <NavLink className="w-10 h-10" href="#">
              <img
                className="rounded-t-lg"
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_2.0/v1/attachments/generic_asset/asset/d51cf66f8a7026eb56a8c8e6b6793b24-1617027896306/lamonastudio-img.png"
                alt=""
              />
            </NavLink>
            <div className="flex justify-start items-center py-4 pl-4">
              <img
                className=" rounded-full"
                src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/706891a4cc08826adca2819e14129aaf-1583755607494/5a706f4e-9f73-4ebc-97ff-9d2ef16bf28c.jpg"
                alt=""
              />
              <div className="pl-3">
                <NavLink className="projects__slider-heading block text-sm">
                  Animated GIFs
                </NavLink>
                <NavLink className="projects__slider-desc text-sm">
                  by lamonastudio
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="projects__slider-item">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <NavLink className="w-10 h-10" href="#">
              <img
                className="rounded-t-lg"
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_2.0/v1/attachments/generic_asset/asset/d51cf66f8a7026eb56a8c8e6b6793b24-1617027896306/lamonastudio-img.png"
                alt=""
              />
            </NavLink>
            <div className="flex justify-start items-center py-4 pl-4">
              <img
                className=" rounded-full"
                src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/706891a4cc08826adca2819e14129aaf-1583755607494/5a706f4e-9f73-4ebc-97ff-9d2ef16bf28c.jpg"
                alt=""
              />
              <div className="pl-3">
                <NavLink className="projects__slider-heading block text-sm">
                  Animated GIFs
                </NavLink>
                <NavLink className="projects__slider-desc text-sm">
                  by lamonastudio
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="projects__slider-item">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <NavLink className="w-10 h-10" href="#">
              <img
                className="rounded-t-lg"
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_300,dpr_2.0/v1/attachments/generic_asset/asset/d51cf66f8a7026eb56a8c8e6b6793b24-1617027896306/lamonastudio-img.png"
                alt=""
              />
            </NavLink>
            <div className="flex justify-start items-center py-4 pl-4">
              <img
                className=" rounded-full"
                src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/706891a4cc08826adca2819e14129aaf-1583755607494/5a706f4e-9f73-4ebc-97ff-9d2ef16bf28c.jpg"
                alt=""
              />
              <div className="pl-3">
                <NavLink className="projects__slider-heading block text-sm">
                  Animated GIFs
                </NavLink>
                <NavLink className="projects__slider-desc text-sm">
                  by lamonastudio
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </Slider>
      <ProjectsSliderButton projectsSliderRef={projectsSliderRef}/>
    </>
  );
};

export default ProjectsSlider;
