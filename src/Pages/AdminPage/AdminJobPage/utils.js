export const headerjob=[
    {
        title: "Tên công việc",
        dataIndex: "tenCongViec",
        key: "tenCongViec",
        render:(tenCongViec)=>{return <p className="w-25 ">{tenCongViec}</p>}
      },  

      {
        title: "Đánh giá",
        dataIndex: "danhGia",
        key: "danhGia",
      },  
      {
        title: "Giá tiền",
        dataIndex: "giaTien" ,
        key: "giaTien",
      },  
      {
        title: "Người tạo",
        dataIndex: "nguoiTao",
        key: "nguoiTao",
      }, 
      {
        title: "Hình ảnh",
        dataIndex: "hinhAnh" ,
        key: "hinhAnh",
        render: (hinhAnh) => <img className="w-50" src={hinhAnh} />
      },  
      {
        title: "Mô tả",
        dataIndex: "moTa",
        key: "moTa",
        render:(moTa)=>{return <p className="w-60 ">{moTa}</p>}
      }, 
      {
        title: "Mô tả ngắn",
        dataIndex: "moTaNgan",
        key: "moTaNgan",
        render:(moTaNgan)=>{return <p className="w-60 ">{moTaNgan}</p>}
      }, 
      {
        title: "Mã chi tiết loại công việc",
        dataIndex: "maChiTietLoaiCongViec",
        key: "maChiTietLoaiCongViec",
      }, 
      {
        title: "Sao công việc",
        dataIndex: "saoCongViec",
        key: "saoCongViec",
      },
      {
        title: "Thao tác",
        dataIndex: "action",
        key: "action",
       
      },

]