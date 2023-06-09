import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import LoadingScreen from "../components/item/LoadingScreen";
function AdminRequired({ children }) {
  const { isInitialized, isAuthenticated, user } = useAuth();

  const location = useLocation();

  if (!isInitialized) {
    return <LoadingScreen />;
  }
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }}></Navigate>;
  }
  if (!user.isAdmin) {
    return <Navigate to="/login" state={{ from: location }}></Navigate>;
  }

  return children;
}

export default AdminRequired;
