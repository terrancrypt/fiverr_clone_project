import React from "react";

export default function CommentDetail({ data }) {
  return (
    <div>
      <div className="flex">
        <img
          src={data.avatar}
          style={{ height: 26 }}
          className="rounded-2xl "
          alt=""
        />
        <p className="mx-2">{data.tenNguoiBinhLuan}</p>
        <i>{data.saoBinhLuan}</i>
      </div>
      <span>{data.noiDung}</span>
    </div>
  );
}
