import MainLayout from "../Layouts/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";

export const mainRoutes = [
  {
    url: "/",
    component: <MainLayout Component={HomePage} />,
  },
  {
    url: "/login",
    component: <MainLayout Component={LoginPage} />,
  },
  {
    url: "/register",
    component: <MainLayout Component={RegisterPage} />,
  },

];
