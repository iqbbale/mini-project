import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
// import { getLocalStorage } from "../utils/localStorage";

interface PropTypes {
  children: ReactNode;
}

const ProtectedRoute = (props: PropTypes) => {
  const { children } = props;
  // pakai ini gabisa maka pakai satunya
  // const auth = getLocalStorage('auth');
  // pakai dari local storagenya saja
  const auth = localStorage.getItem("auth");
  // cari loginnya siapa, dengan path name nanati tau apakah user apakah admin
  const currentRoute = useLocation().pathname;

  // jika belum login
  if (!auth && currentRoute !== "/login") {
    return <Navigate to="/login" />;
  }

  // jika sudah login
  if (auth && currentRoute === "/login") {
    return <Navigate to="/orders" replace />;
  }

  // jika lolos pengecekan semuanya maka return
  return <> {children}</>;
};

export default ProtectedRoute;
