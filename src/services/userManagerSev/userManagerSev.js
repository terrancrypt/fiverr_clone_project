import { https } from "../config";

export const userManagerSev = {
  getUser: () => {
    return https.get(`/api/users/2381`);
  },
  putUser: () => {
    return https.put(`/api/users/2381`);
  },
  getHired: () => {
    return https.get(`/api/thue-cong-viec/lay-danh-sach-da-thue`);
  },
};
