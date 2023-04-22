import React, { useEffect } from "react";
import "./loginPage.css";
import { useDispatch } from "react-redux";
import { userService } from "../../services/loginServices/loginService";
import { Button, Form, Input, message } from "antd";
import { localUserService } from "../../services/loginServices/localService";
import { setUserLogin } from "../../toolkit/userSlice";
import { NavLink, useNavigate } from "react-router-dom";
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
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    
  };


  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className=" p-6 space-y-4 md:space-y-6 sm:p-8">
            <LoginPageImg/>
            <Form 
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 24,
            }}
            style={{
              width:"100%"
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={singInUser}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout='vertical'
          >
            <Form.Item
              label="User name"
              name="email"
        
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input  />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              wrapperCol={{
              
                span: 24,
              }}
              className="flex justify-center items-center"
            >
              <Button className="bg-orange-500 hover:text-white hover:border-hidden" htmlType="submit">
                Submit
              </Button>
              <br /><br />
              <span  > Bạn chưa có tài khoản ? <NavLink className='text-red-500' to="/register"> <u>Đăng kí tại đây</u></NavLink> </span>
            </Form.Item>
          </Form>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
