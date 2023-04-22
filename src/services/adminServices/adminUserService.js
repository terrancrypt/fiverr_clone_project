import { https } from "../config";

export const adminUserService = {
  getUserList: () => {
    return https.get("/api/users");
  },
  deleteUser: (id) => {
    return https.delete(`/api/users?id=${id}`);
  },
  getSearchUser: (name) => {
    return https.get(`/api/users/search/${name}`);
  },
};
