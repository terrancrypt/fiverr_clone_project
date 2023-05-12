import { https } from "./config"

export const categoriesServices={
    getCategoriesExplore:(id)=>{
        return https.get(`/api/cong-viec/lay-chi-tiet-loai-cong-viec?MaLoaiCongViec=${id}`)
    }
}