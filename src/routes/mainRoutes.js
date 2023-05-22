import MainLayout from "../Layouts/MainLayout";
import DetailPage from "../Pages/DetailPages/DetailPage";
import HomePage from "../Pages/HomePage/HomePage";
import JobsListPage from "../Pages/JobsListPage/JobsListPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import UserManagerpage from "../Pages/UserManagerPage/UserManagerpage";
import Categories from "../Pages/Categories/Categories";
import CategoriesDetail from "../Pages/Categories/CategoriesDetail/CategoriesDetail";
import SearchPage from "../Pages/SearchPage/SearchPage";

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
  {
    url: "/manager",
    component: <MainLayout Component={UserManagerpage} />,
  },
  {
    url: "/detail",
    component: <MainLayout Component={DetailPage} />,
  },
  {
    url: "/title/:id",
    component: <MainLayout Component={Categories} />,
  },
  {
    url: "/categories/:id",
    component: <MainLayout Component={CategoriesDetail} />,
  },
  {
    url: "/search/:param",
    component: <MainLayout Component={SearchPage} />,
  },
];
