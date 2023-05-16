import React from "react";
import { useNavigate } from "react-router-dom";
import { userService } from "../../services/loginServices/loginService";
import { Button, Form, Input, message } from "antd";
import "./registerPage.css"

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const RegisterPage = () => {
  let navigate = useNavigate();
  const [form] = Form.useForm();
  const registerUser = (values) => {

    userService
      .postRegister(values)
      .then((res) => {
        message.success("Đăng ký thành công");
        console.log(res);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        message.error(err.response.data.content);
      });
  };

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900 mt-48 mb-20">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create and account
              </h1>

              <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={registerUser}
                
                style={{
                  maxWidth: 600,
                }}
                scrollToFirstError
              >
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[
                    {
                      type: "name",
                      message: "The input is not valid Name",
                    },
                    {
                      required: true,
                      message: "Please input your Name",
                    },
                  ]}
                >
                  <Input className="register__input" placeholder="Your Name" />
                </Form.Item>
                <Form.Item
                  name="email"
                  label="E-mail"
                  rules={[
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!",
                    },
                  ]}
                >
                  <Input className="register__input" placeholder="Your Email" />
                </Form.Item>

                <Form.Item
                  name="password"
                  label="Password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                  hasFeedback
                >
                  <Input.Password className="register__password" placeholder="Your Password" />
                </Form.Item>

                <Form.Item
                  name="Confirm Password"
                  label="Confirm Password"
                  dependencies={["password"]}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your password!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error(
                            "The two passwords that you entered do not match!"
                          )
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password className="register__password" placeholder="Repeat your password" />
                </Form.Item>
                <Form.Item
                  name="phone"
                  label="Phone Number"
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone number!",
                    },
                  ]}
                >
                  <Input className="register__input"
                   
                    placeholder="Your Phone"
                  />
                </Form.Item>

                <Form.Item
                  name="birthday"
                  label="Birthday"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Birthday!",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input type="date" className="register__input" />
                </Form.Item>
                <Form.Item>
                  <div id="gender" className="register__gender  mb-4">
                    <svg
                      className="svg-inline--fa fa-venus-mars fa-lg fa-fw"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="venus-mars"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                      data-fa-i2svg
                    >
                      <path
                        fill="currentColor"
                        d="M176 288c61.9 0 112-50.1 112-112s-50.1-112-112-112S64 114.1 64 176s50.1 112 112 112zM352 176c0 86.3-62.1 158.1-144 173.1V384h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H208v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V448H112c-17.7 0-32-14.3-32-32s14.3-32 32-32h32V349.1C62.1 334.1 0 262.3 0 176C0 78.8 78.8 0 176 0s176 78.8 176 176zM271.9 360.6c19.3-10.1 36.9-23.1 52.1-38.4c20 18.5 46.7 29.8 76.1 29.8c61.9 0 112-50.1 112-112s-50.1-112-112-112c-7.2 0-14.3 .7-21.1 2c-4.9-21.5-13-41.7-24-60.2C369.3 66 384.4 64 400 64c37 0 71.4 11.4 99.8 31l20.6-20.6L487 41c-6.9-6.9-8.9-17.2-5.2-26.2S494.3 0 504 0H616c13.3 0 24 10.7 24 24V136c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-33.4-33.4L545 140.2c19.5 28.4 31 62.7 31 99.8c0 97.2-78.8 176-176 176c-50.5 0-96-21.3-128.1-55.4z"
                      />
                    </svg>

                    <div className="radio gender_inp">
                      <input
                        id="male"
                        type="radio"
                        name="gender"
                        defaultValue="true"
                        value="Nam"
                        defaultChecked
                      />
                      <label className="radio__label" for="male">
                        Male
                      </label>
                      <input
                        id="female"
                        type="radio"
                        name="gender"
                        defaultValue="false"
                        value='Nữ'
                        
                      />
                      <label className="radio__label" for="female">
                        Female
                      </label>
                    </div>
                  </div>
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                  <Button
                    className="bg-green-500 hover:text-white hover:border-hidden"
                    htmlType="submit"
                  >
                    Register
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default RegisterPage;
