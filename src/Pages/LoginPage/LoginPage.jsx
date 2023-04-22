import React from "react";
import "./loginPage.css";
import { useDispatch } from "react-redux";
import { userService } from "../../services/loginServices/loginService";
import { message } from "antd";
import { localUserService } from "../../services/loginServices/localService";
import { setUserLogin } from "../../toolkit/userLogin";
import { useNavigate } from "react-router-dom";
import LoginPageImg from "./LoginPageImg";
const LoginPage = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const singInUser = (values) => {
    userService
      .postLogin(values)
      .then((res) => {
        message.success("Login thành công");
        localUserService.set(res.data.content);
        dispatch(setUserLogin(res.data.content));
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        message.error("Login thất bại");
      });
  };

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className=" p-6 space-y-4 md:space-y-6 sm:p-8">
              <form className="space-y-4 md:space-y-6">
                <LoginPageImg/>
  
                <div className="mb-6">
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Email/Username"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  ></label>
                  <input
                    type="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Password"
                    required
                  />
                </div>

                <button
                  type="continute"
                  onClick={singInUser}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800   "
                >
                  Continute
                </button>

                <div className="flex items-start mb-6">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      defaultValue
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <label
                    htmlFor="remember"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                  <a href="/">
                    <u>Forgot Password</u>
                  </a>
                </div>
                <hr />
                <div>
                  <p>
                    Not a member yet?{" "}
                    <a href="/">
                      <u>Join Now</u>
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
