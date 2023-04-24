import React from "react";
import { footerData } from "./footerData";
import { NavLink } from "react-router-dom";
import FooterBottom from "./FooterBottom/FooterBottom";
import { Collapse } from "antd";

const FooterMobile = () => {
  const { Panel } = Collapse;
  return (
    <footer>
      <div className="container my-0 mx-auto px-6 sm:px-8 2xl:px-0 pt-6 pb-6 border-t">
        <Collapse
          className="bg-transparent"
          bordered={false}
          expandIconPosition="end"
        >
          {footerData.map((item, index) => {
            return (
              <Panel header={item.title} key={index}>
                {item.links.map((link, id) => {
                  return (
                    <NavLink className="block" key={id}>
                      {link}
                    </NavLink>
                  );
                })}
              </Panel>
            );
          })}
        </Collapse>
        <FooterBottom />
      </div>
    </footer>
  );
};

export default FooterMobile;
