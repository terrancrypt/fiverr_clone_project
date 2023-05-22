import { Card } from "antd";
const { Meta } = Card;

const ItemJobList = ({ data }) => (
  <div className="w-80 mx-4">
    <Card
      className=" items-center"
      hoverable
      cover={
        <img style={{ width: 360 }} alt="example" src={data.congViec.hinhAnh} />
      }
    >
      <Meta title={data.tenLoaiCongViec} />
      <span>{data.congViec.moTaNgan}</span>
    </Card>
  </div>
);

export default ItemJobList;
