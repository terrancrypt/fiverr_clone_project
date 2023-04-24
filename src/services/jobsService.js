import { https } from "./config";

export const jobsService = {
  getMenuCategories: () => {
    return https.get(`api/cong-viec/lay-menu-loai-cong-viec`);
  },
  getJobs : () =>{
    return https.get(`/api/cong-viec`);
  }
};
