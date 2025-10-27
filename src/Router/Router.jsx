import { createBrowserRouter } from "react-router";
import Root from "../Layouts/RootLayouts/Root";
import Home from "../Pages/Home/Home";
import Dashboard from "../Pages/Dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:
    [
        {
            index:true,
            Component:Home
        },
        {
          path:'/dashboard',
          Component:Dashboard
        }
    ]
  },
]);