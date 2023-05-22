import React from "react";
import {  Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "./HeaderCategoriesDetail.css";
import "./HeaderCategoriesDetail.css"


function HeaderCategoriesDetail() {
  
  const categoriesMenu = [
    {
      nameCate: "Categories",
      menu: {
        items: [
          {
            label: <span className="text-green-400">All Categories</span>,
            key: "1",
          },
          {
            label: (
              <span>
                Web Programing <span className="text-gray-400">(20,566)</span>
              </span>
            ),

            key: "2",
          },
          {
            label: (
              <span>
                Data Entry <span className="text-gray-400">(12,566)</span>
              </span>
            ),
            key: "3",
          },
        ],
      },
    },
    {
      nameCate: "Service Options",
      menu: {
        items: [
          {
            label: <span className="text-green-400">All Categories</span>,
            key: "1",
          },
          {
            label: (
              <span>
                Web Programing <span className="text-gray-400">(20,566)</span>
              </span>
            ),

            key: "2",
          },
          {
            label: (
              <span>
                Data Entry <span className="text-gray-400">(12,566)</span>
              </span>
            ),
            key: "3",
          },
        ],
      },
    },
    {
      nameCate: "Seller Details",
      menu: {
        items: [
          {
            label: <span className="text-green-400">All Categories</span>,
            key: "1",
          },
          {
            label: (
              <span>
                Web Programing <span className="text-gray-400">(20,566)</span>
              </span>
            ),

            key: "2",
          },
          {
            label: (
              <span>
                Data Entry <span className="text-gray-400">(12,566)</span>
              </span>
            ),
            key: "3",
          },
        ],
      },
    },
    {
      nameCate: "Delivery Time",
      menu: {
        items: [
          {
            label: <span className="text-green-400">All Categories</span>,
            key: "1",
          },
          {
            label: (
              <span>
                Web Programing <span className="text-gray-400">(20,566)</span>
              </span>
            ),

            key: "2",
          },
          {
            label: (
              <span>
                Data Entry <span className="text-gray-400">(12,566)</span>
              </span>
            ),
            key: "3",
          },
        ],
      },
    },
  ];

  return (
    <div className="categories__dropdown flex  items-center">
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
  );
}

export default HeaderCategoriesDetail;
