import { JSX } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children }: { children?: JSX.Element }) => {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/login" replace />;
  return children ?? <Outlet />;
};

export default ProtectedRoute;
