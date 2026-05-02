import type { RouteObject } from "react-router-dom";
import Home from "../components/pages/home";
import ProtectedRoute from "./ProtectedRoute";
import Login from "../components/pages/login";
import ListOrder from "../components/pages/ListOrder";
import DetailOrder from "../components/pages/detailOrder";
import CreateOrder from "../components/pages/createOrder";

// RouteObject type array yang menyimpan object
const routers: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: (
      <ProtectedRoute>
        <Login />
      </ProtectedRoute>
    ),
  },
  {
    path: "/orders",
    element: (
      <ProtectedRoute>
        <ListOrder />
      </ProtectedRoute>
    ),
  },
  {
    path: "/orders/:id", //jik dia dinamis berdasarkan ID tambah aja di belakangnya :ID
    element: (
      <ProtectedRoute>
        <DetailOrder />
      </ProtectedRoute>
    ),
  },
  {
    path: "/create", //jik dia dinamis berdasarkan ID tambah aja di belakangnya :ID
    element: (
      <ProtectedRoute>
        <CreateOrder />
      </ProtectedRoute>
    ),
  },
];

export default routers;
