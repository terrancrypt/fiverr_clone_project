import { Collapse } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import SideBarCategories from "./SideBarCategories";

const HeaderSideBarNoLogin = () => {
  const { Panel } = Collapse;
  return (
   
      <ul className="sidebar__menu-main flex flex-col space-y-3 mb-8">
        <li>
          <NavLink to="/register" className="sidebar__header-button text-white">
            Join Fiver
          </NavLink>
        </li>
        <li>
          <NavLink to="/login">Sign In</NavLink>
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
          <NavLink>Fiverr Business</NavLink>
        </li>
      </ul>
  
  );
};

export default HeaderSideBarNoLogin;
