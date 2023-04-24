import React, { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { Navigate, Outlet, useNavigate, Location } from "react-router-dom";

export const RoutesProtection = () => {
  const { user } = useContext(UserContext);

  if (loading) {
    // todo return CSS loading styles
  }

  if (!user) {
    return <Navigate to="/" state={location} />;
  }

  return <Outlet />;
};
