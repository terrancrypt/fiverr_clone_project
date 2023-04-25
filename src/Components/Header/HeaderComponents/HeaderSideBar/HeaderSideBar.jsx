import React from "react";
import { NavLink } from "react-router-dom";
import "./HeaderSideBar.css";
import SideBarCategories from "./SideBarCategories";
import { handleCloseSideBar } from "./SideBarFunction";
import { Collapse } from "antd";

const HeaderSideBar = () => {
  const { Panel } = Collapse;
  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <div className="sidebar__content flex flex-col space-y-5 justify-start pt-5">
          <div className="sidebar__header px-5">
            <NavLink to="/login" className="sidebar__header-button text-white">
              Join Fiver
            </NavLink>
          </div>
          <div className="sidebar__menu overflow-auto h-full pb-5 px-5">
            <ul className="sidebar__menu-main flex flex-col space-y-3 mb-8">
              <li>
                <NavLink>Sign In</NavLink>
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
            <div className="sidebar__menu-general">
              <span className="text-sm font-extrabold">General</span>
              <hr className="my-2" />
              <ul className="sidebar__menu-general-list flex flex-col space-y-3">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <Collapse ghost expandIconPosition="end">
                    <Panel header="English"></Panel>
                  </Collapse>
                </li>
                <li>
                  <Collapse ghost expandIconPosition="end">
                    <Panel header="US$ USD"></Panel>
                  </Collapse>
                </li>
                <li>
                  <NavLink>Open in App</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sidebar__overlay" onClick={handleCloseSideBar}></div>
      </div>
    </div>
  );
};

export default HeaderSideBar;
