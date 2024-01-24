import { createBrowserRouter, Navigate } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
  AddJob,
  AdminList,
  AllJobs,
  UserList,
  Stats,
} from "../views";

const AuthorizedRoute = ({ element, roles }) => {
  // You can implement your role checking logic here
  // For simplicity, assuming userRoles is an array containing user roles
  const userRoles = ["admin"]; // Replace this with actual user roles

  const isAuthorized = userRoles.some((role) => roles.includes(role));
  // console.log(isAuthorized);
  // // Redirect to login if not authorized
  if (!isAuthorized) {
    return <Navigate to="/login" />;
  }

  return element;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "jobs",
        element: <AllJobs />,
      },
      {
        path: "job/create",
        element: <AuthorizedRoute element={<AddJob />} roles={["admin"]} />,
      },
      {
        path: "stats",
        element: <AuthorizedRoute element={<Stats />} roles={["admin"]} />,
      },
      {
        path: "users",
        element: <AuthorizedRoute element={<UserList />} roles={["admin"]} />,
      },
      {
        path: "admin",
        element: <AuthorizedRoute element={<AdminList />} roles={["admin"]} />,
      },
    ],
  },
  // ... other routes
]);
