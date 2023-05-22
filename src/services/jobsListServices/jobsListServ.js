import { https } from "../config";

export const jobsListService = {
  getJobsServ: () => {
    return https.get(`/api/cong-viec/lay-cong-viec-theo-chi-tiet-loai/3`);
  },
};
