import MainLayout from "../Layouts/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";

export const mainRoutes = [
  {
    url: "/",
    component: <MainLayout Component={HomePage} />,
  },
];
