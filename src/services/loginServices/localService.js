export const localUserService={
    get:() =>{
        let dataJson=localStorage.getItem("USER_INFOR");
        return JSON.parse(dataJson);
    },
    set:(userInfo) =>{
        let dataJson= JSON.stringify(userInfo);
        localStorage.setItem("USER_INFOR",dataJson);
    },
    remove:() => {
        localStorage.removeItem("USER_INFOR");
    },
};