import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const isAuthenticated = true;

  if (isAuthenticated) {
    return children;
  }
  return <Navigate to="/" />;
};

export default PrivateRoute;
