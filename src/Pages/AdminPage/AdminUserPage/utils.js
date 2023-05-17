import { Button } from "antd";

export const headerUsers = [
  {
    title: "Tài khoản",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Mật khẩu",
    dataIndex: "password",
    key: "password",
  },
  {
    title: "Số điện thoại",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Giới tính",
    dataIndex: "gender",
    key: "gender",
    render: (type) => {
      if (type === true) {
        return <p> Nam </p>;
      } else {
        return <p>Nữ</p>;
      }
    },
  },
  {
    title: "Chức vụ",
    dataIndex: "role",
    key: "role",
  },
  {
    title: "Hình ảnh",
    dataIndex: "avatar",
    key: "avatar",
    render: (avatar) => <img className="w-20" src={avatar} />,
  },
  {
    title: "Ngày sinh",
    dataIndex: "birthday",
    key: "birthday",
  },
  {
    title: "Skill",
    dataIndex: "skill",
    key: "skill",
    render:(skill)=>{return <p className="w-14" >{skill}</p>}
  },
  {
    title: "Công việc đặt trước",
    dataIndex: "bookingJob",
    key: "bookingJob",
  },
  {
    title: "Chứng nhận",
    dataIndex: "certification",
    key: "certification",
  },
  {
    title: "Thao tác",
    dataIndex: "action",
    key: "action",
   
  },
];
