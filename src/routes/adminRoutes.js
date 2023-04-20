import AdminLayout from "../Layouts/AdminLayout";
import AdminCategoriesPage from "../Pages/AdminPage/AdminCategoriesPage/AdminCategoriesPage";
import AdminJobPage from "../Pages/AdminPage/AdminJobPage/AdminJobPage";
import AdminServicesPage from "../Pages/AdminPage/AdminServicesPage/AdminServicesPage";
import AdminUserPage from "../Pages/AdminPage/AdminUserPage/AdminUserPage";

export const adminRoutes = [
  {
    url: "/admin-user",
    component: <AdminLayout Component={AdminUserPage} />,
  },
  {
    url: "/admin-job",
    component: <AdminLayout Component={AdminJobPage} />,
  },
  {
    url: "/admin-services",
    component: <AdminLayout Component={AdminServicesPage} />,
  },
  {
    url: "/admin-categories",
    component: <AdminLayout Component={AdminCategoriesPage} />,
  },
];
