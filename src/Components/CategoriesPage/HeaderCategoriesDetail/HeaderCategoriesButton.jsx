import { Switch } from "antd";
import React from "react";

const items = ["Pro services", "Local sellers", "Online sellers"];

const HeaderCategoriesButton = () => {
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <>
      {items.map((item, index) => (
        <div className="toggle flex items-center" key={index}>
          <label>
            <Switch className="h-[18px] w-[31px] min-w-0" onChange={onChange} />
          </label>
          <span className="ml-3 text-gray-700 font-semibold">{item}</span>
        </div>
      ))}
    </>
  );
};

export default HeaderCategoriesButton;
