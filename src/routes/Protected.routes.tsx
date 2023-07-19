import { useContext } from "react"
import { AppCotext } from "../contexts/App.context"
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {

  const { token } = useContext(AppCotext);

  console.log(token);

  return !!token ? <Outlet /> : <Navigate to={'/login'} />;
}