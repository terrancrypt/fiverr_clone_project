import React from "react";
import { footerData } from "./footerData";
import { NavLink } from "react-router-dom";
import FooterBottom from "./FooterBottom/FooterBottom";

const FooterDefault = () => {
  return <footer>
    <div className="container my-0 mx-auto px-6 sm:px-8 2xl:px-0 pt-6 pb-6 border-t">
      <div className="grid grid-cols-3 lg:grid-cols-5 lg:space-x-3 border-b">
        {footerData.map((item, index)=>{
          return <div key={index}>
            <h6 className="text-base mb-5">{item.title}</h6>
            <ul className="pb-5">
              {item.links.map((links, index)=>{
                return <li className="mb-4 text-gray-500" key={index}>
                  <NavLink>
                    {links}
                  </NavLink>
                </li>
              })}
            </ul>
          </div>
        })}
      </div>
      <FooterBottom/>
    </div>
  </footer>;
};

export default FooterDefault;
