import MainLayout from "../Layouts/MainLayout";
import DetailPage from "../Pages/DetailPages/DetailPage";
import HomePage from "../Pages/HomePage/HomePage";
import JobsListPage from "../Pages/JobsListPage/JobsListPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
// import UserManagerpage from "../Pages/UserManagerPage/UserManagerpage";

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
  {
    url: "/jobs-list",
    component: <MainLayout Component={JobsListPage} />,
  },
  // {
  //   url: "/manager",
  //   component: <MainLayout Component={UserManagerpage} />,
  // },
  {
    url: "/detail",
    component: <MainLayout Component={DetailPage} />,
  },
];
