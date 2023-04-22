import { https } from "../config";

export const adminService = {
  getAdminService: () => {
    return https.get(`/api/loai-cong-viec`);
  },
  deleteServ: (id) => {
    return https.get(`/api/loai-cong-viec/${id}`);
  },
};
