import { https } from "../config";

export const adminCategories = {
  getAdminCategories: () => {
    return https.get(`/api/users`);
  },
  deleteCategories: (id) => {
    return https.get(`/api/users?id=${id}`);
  },
};
