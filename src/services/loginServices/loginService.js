import axios from "axios";
import { BASE_URL, configHeaders } from "../config";



export const userService={
    postLogin: (loginForm) => {
        return axios({
          url: `${BASE_URL}/api/auth/signin`,
          method: "POST",
          data: loginForm,
          headers: configHeaders(),
        });
      },
      postRegister: (registerForm) => {
        return axios({
          url: `${BASE_URL}/api/auth/signin`,
          method: "POST",
          data: registerForm,
          headers: configHeaders(),
        });
      },
}