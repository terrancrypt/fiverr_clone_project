import React from "react";
import {  Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "./HeaderCategoriesDetail.css";
import "./HeaderCategoriesDetail.css"
import HeaderCategoriesButton from "./HeaderCategoriesButton";
import { categoriesMenu } from "./data";


function HeaderCategoriesDetail() {

  return (
    <div className="categories__topbar flex justify-between">
        <div className="categories__dropdown flex items-center">
      {categoriesMenu?.map((categories, index) => {
        return <Dropdown menu={categories.menu} key={index}>
            <Space >
              <button className="name__cate flex space-x-2 justify-center items-center">
        <span>{categories.nameCate}</span>
        <DownOutlined className="w-[14px]" />
        </button>
      </Space>
        </Dropdown>;
      })}
    </div>
          <div className="categories-topbar-toggle flex lg:col-span-6 lg:justify-end gap-5 items-center">
            <HeaderCategoriesButton />
          </div>
        </div>
  );
}

export default HeaderCategoriesDetail;
