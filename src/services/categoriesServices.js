import { https } from "./config"

export const categoriesServices={
    getCategoriesExplore:(id)=>{
        return https.get(`/api/cong-viec/lay-chi-tiet-loai-cong-viec/${id}`)
    },
    getCategoriesSearch:(param)=>{
        return https.get(`/api/cong-viec/lay-danh-sach-cong-viec-theo-ten/${param}`)
    },
    getDetailCategories:(id)=>{
        return https.get(`/api/cong-viec/lay-cong-viec-theo-chi-tiet-loai/${id}`)
    }
}
