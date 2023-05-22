import { https } from "../config";

export const detailPageSev = {
  getDetailPageSev: () => {
    return https.get(`/api/cong-viec/lay-cong-viec-chi-tiet/3`);
  },
  postDetailPageSev: () => {
    return https.post(`/api/thue-cong-viec`);
  },
  getComment: () => {
    return https.get(`/api/binh-luan/lay-binh-luan-theo-cong-viec/1`);
  },
  postComment: () => {
    return https.post(`/api/binh-luan`);
  },
};
