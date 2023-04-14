import { https } from "./config";

export const categoriesService = {
  getMenuCategories: () => {
    return https.get(`api/cong-viec/lay-menu-loai-cong-viec`);
  },
};
