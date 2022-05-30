import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks";

const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();

  return auth?.info?.employee_id ? (
    <Outlet />
  ) : (
    <Navigate to="/startpage" state={{ from: location }} replace />
  );
};

export default RequireAuth;
