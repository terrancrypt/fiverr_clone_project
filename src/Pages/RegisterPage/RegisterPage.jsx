import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userService } from "../../services/loginServices/loginService";
import { Button, Form, Input, Radio, message } from "antd";
import "./registerPage.css";

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
  const [gender, setGender] = useState(true);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setGender(e.target.value);
  };

  const registerUser = (values) => {
    console.log(values);

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
                  <Input.Password
                    className="register__password"
                    placeholder="Your Password"
                  />
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
                  <Input.Password
                    className="register__password"
                    placeholder="Repeat your password"
                  />
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
                  <Input className="register__input" placeholder="Your Phone" />
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
                  <Radio.Group onChange={onChange} value={gender}>
                    <Radio value={false}>Nam</Radio>
                    <Radio value={true}>Nữ</Radio>
                  </Radio.Group>
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
