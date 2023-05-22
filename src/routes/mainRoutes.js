import MainLayout from "../Layouts/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
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
