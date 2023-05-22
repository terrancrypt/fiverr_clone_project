import React from "react";

export default function ItemDetailPage({ data }) {
  return (
    <div>
      <p>
        <a href="#" className="text-blue-600">
          {data.tenLoaiCongViec}
        </a>{" "}
        {"> "}
        <a href="#" className="text-blue-600">
          {data.tenNhomChiTietLoai}
        </a>{" "}
        {">"}{" "}
        <a href="#" className="text-blue-600">
          {data.tenChiTietLoai}
        </a>
      </p>
      <span className="flex">
        <img
          className="rounded-full flex-none mx-3 "
          style={{ height: 30 }}
          src={data.avatar}
          alt=""
        />
        <a href="#" className="mx-2">
          {data.tenNguoiTao}
        </a>
        {"   Top Rated Seller  "}
        <i className="mx-2">{data.congViec.saoCongViec}</i>
        <i className="mx-2">{data.congViec.danhGia}</i>
      </span>
      <h1>{data.congViec.tenCongViec}</h1>
      <img src={data.congViec.hinhAnh} alt="" />
    </div>
  );
}
