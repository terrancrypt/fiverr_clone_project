import React from "react";
import { NavLink } from "react-router-dom";
import SideBarCategories from "./SideBarCategories";
import { Avatar, Collapse, Space } from "antd";
import { UserOutlined, LoginOutlined } from "@ant-design/icons";
import { localUserService } from "../../../../services/loginServices/localService";

const HeaderSideBarLoggedIn = ({ userInfo }) => {
  const { Panel } = Collapse;
  const logOut = () => {
    localUserService.remove();
    window.location.reload();
  };

  return (
    <>
      <ul className="sidebar__menu-main flex flex-col space-y-4 mb-8">
        <li>
          <Space>
            <Avatar
              shape="circle"
              className="flex items-center justify-center"
              size={50}
              icon={userInfo.user.avatar || <UserOutlined />}
            />
            <span className="text-black ml-2 font-bold">
              {userInfo.user.name}
            </span>
          </Space>
        </li>
        <li>
          <button
            onClick={logOut}
            className="flex items-center whitespace-nowrap"
          >
            Sign Out <LoginOutlined className="ml-2" />
          </button>
        </li>
        <li>
          <Collapse ghost expandIconPosition="end">
            <Panel header="Browse Categories">
              <SideBarCategories />
            </Panel>
          </Collapse>
        </li>
        <li>
          <NavLink>Explore</NavLink>
        </li>
        <li>
          <NavLink className="text-green-500 font-bold">Fiverr Pro</NavLink>
        </li>
      </ul>
    </>
  );
};

export default HeaderSideBarLoggedIn;
