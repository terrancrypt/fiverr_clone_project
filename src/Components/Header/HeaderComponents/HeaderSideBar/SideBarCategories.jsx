import React, { useEffect, useState } from "react";
import { jobsService } from "../../../../services/jobsService";
import { NavLink } from "react-router-dom";
import { Collapse } from "antd";

const SideBarCategories = () => {
  const { Panel } = Collapse;
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    jobsService
      .getMenuCategories()
      .then((res) => {
        setCategories(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Collapse ghost expandIconPosition="end">
      {categories.map((item, index) => {
        return (
          <Panel className="py-2" header={item.tenLoaiCongViec} key={index}>
            {item.dsNhomChiTietLoai.map((job, id) => {
              return (
                <ul key={id}>
                  {job.dsChiTietLoai.map((jobtitle, jobId) => {
                    return (
                      <NavLink className="block py-2" key={jobId}>
                        {jobtitle.tenChiTiet}
                      </NavLink>
                    );
                  })}
                </ul>
              );
            })}
          </Panel>
        );
      })}
    </Collapse>
  );
};

export default SideBarCategories;
