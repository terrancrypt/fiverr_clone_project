import AdminLayout from "../Layouts/AdminLayout";
import AdminJobPage from "../Pages/AdminPage/AdminJobPage/AdminJobPage";
import AdminUserPage from "../Pages/AdminPage/AdminUserPage/AdminUserPage";



export const adminRoutes =[
    
  {
    url: "/admin-user",
    component: <AdminLayout Component={AdminUserPage} />,
  },
  {
    url: "/admin-job",
    component: <AdminLayout Component={AdminJobPage} />,
  },
]