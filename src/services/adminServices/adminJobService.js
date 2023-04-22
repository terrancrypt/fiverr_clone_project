import { https } from "../config"

export const adminJobService={
    getUserList:()=>{
        return https.get("/api/cong-viec")
    }
}