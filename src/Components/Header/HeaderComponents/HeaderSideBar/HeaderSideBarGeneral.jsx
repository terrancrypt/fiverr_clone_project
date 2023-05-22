import { Collapse } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";

const HeaderSideBarGeneral = () => {
  const { Panel } = Collapse;
  return (
    <div className="sidebar__menu-general mt-4">
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
  );
};

export default HeaderSideBarGeneral;
