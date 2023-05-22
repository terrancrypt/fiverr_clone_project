import React from "react";
import "./HeaderSideBar.css";
import { handleCloseSideBar } from "./SideBarFunction";
import HeaderSideBarNoLogin from "./HeaderSideBarNoLogin";
import HeaderSideBarGeneral from "./HeaderSideBarGeneral";
import { useSelector } from "react-redux";
import HeaderSideBarLoggedIn from "./HeaderSideBarLoggedIn";

const HeaderSideBar = () => {
  const userInfo = useSelector((state) => state.userSlice.userInfo);

  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <div className="sidebar__content flex flex-col space-y-5 justify-start pt-5">
          <div className="sidebar__menu overflow-auto h-full px-3">
            {userInfo ? (
              <HeaderSideBarLoggedIn userInfo={userInfo} />
            ) : (
              <HeaderSideBarNoLogin />
            )}

            <HeaderSideBarGeneral />
          </div>
        </div>
        <div className="sidebar__overlay" onClick={handleCloseSideBar}></div>
      </div>
    </div>
  );
};

export default HeaderSideBar;
