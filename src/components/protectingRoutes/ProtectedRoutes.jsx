import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../appContext/AppContext";

const ProtectedRoutes = ({ user, children }) => {
  const { globalUser } = useContext(AppContext);
  if (!globalUser.connected) {
    return <Navigate to="/logIn" replace />;
  }

  return children;
};

export default ProtectedRoutes;