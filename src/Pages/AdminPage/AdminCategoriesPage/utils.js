import { Radio, Tag } from "antd";

export const categories = [
  {
    title: "Mã",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Tên ",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "email ",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Số điện thoại ",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Skill ",
    dataIndex: "skill",
    key: "skill",
  },
  {
    title: "BooKingJob ",
    dataIndex: "bookingJob",
    key: "bookingJob",
  },
  {
    title: "Giới tính ",
    key: "gender",
    dataIndex: "gender",
    render: (type) => {
      if (type === true) {
        return <p> Nam </p>;
      } else {
        return <p>Nữ</p>;
      }
    },
  },
  {
    title: "role ",
    dataIndex: "role",
    key: "role",
    render: (type) => {
      if (type === "ADMIN") {
        return <Tag color="blue">ADMIN</Tag>;
      } else {
        return <Tag color="orange">USER</Tag>;
      }
    },
  },
  {
    title: "Thao tác",
    dataIndex: "action",
    key: "action",
  },
];
