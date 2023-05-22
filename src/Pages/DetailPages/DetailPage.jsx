import React, { useEffect, useState } from "react";
import { detailPageSev } from "../../services/detailPageSev/detailPageSev";
import ItemDetailPage from "./ItemDetailPage";
import CommentDetail from "./CommentDetail";
import CommentInput from "./CommentInput";
import DataDetail from "./DataDetail";

export default function DetailPage() {
  const [detail, setDetail] = useState([]);
  const [comment, setComment] = useState([]);
  useEffect(() => {
    let fetchDetail = async () => {
      try {
        let detail = await detailPageSev.getDetailPageSev();
        setDetail(detail.data.content);
        console.log(detail.data.content);
      } catch (error) {}
    };
    let commentDetail = async () => {
      try {
        let comment = await detailPageSev.getComment();
        setComment(comment.data.content);
        console.log(comment.data.content);
      } catch (error) {}
    };

    fetchDetail();
    commentDetail();
  }, []);
  return (
    <div className="mt-5 container m-auto">
      {" "}
      <div>
        <div>
          {detail.map((item) => {
            return <ItemDetailPage data={item} key={item.id} />;
          })}
        </div>
        <div>
          <DataDetail />
        </div>
        <div>
          {comment.map((data) => {
            return <CommentDetail data={data} key={data.id} />;
          })}
        </div>
        <div>
          <CommentInput />
        </div>
      </div>
    </div>
  );
}
