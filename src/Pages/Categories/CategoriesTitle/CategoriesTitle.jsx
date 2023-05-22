import React from "react";
import "./CategoriesTitle.css";
import {ArrowRightOutlined} from "@ant-design/icons";

function CategoriesTitle() {
  const items = [
    {
      title: "Minimalist Logo Design",
      img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
    },
    {
      title: "Architecture & Interior Design",
      img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101618/Architecture%20_%20Interior%20Design_2x.png",
    },
    {
      title: "Image Editing",
      img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101633/Illustration_2x.png",
    },
    {
      title: "NFT Art",
      img: "https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/fc6c7b8c1d155625e7878252a09c4437-1653222039380/Nft%20Art%20%281%29.png",
    },
  ];

  return (
    <div className="categories__title">
      <div className="container mt-5 sm:mt-3 mb-5 sm:mb-3">
        <h1 className="text-2xl lg:text-3xl">
          Most popular in Digital Marketing
        </h1>
        <div className="whitespace-nowrap flex flex-col md:flex-row justify-start md:items-center">
        {items.map((item, index)=>(
            <div key={index} className="item flex flex-col xl:flex-row  items-center justify-start px-3 py-2 border border-gray-200 rounded-md mx-2 my-2 md:my-0" >
            <img
              src={item.img}
              alt="..."
              className="w-16 h-16"
            />
            <span className="ml-2 text-sm flex justify-center items-center">{item.title} <ArrowRightOutlined className="ml-2 text-base font-bold mb-1"/></span>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default CategoriesTitle;
