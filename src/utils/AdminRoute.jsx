/*
 * File: PrivateRoute.jsx
 * Author: Joseph Koh
 * Description: Defines an admin route
 */

import { Outlet, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { AuthenticateAdmin } from "../utils/AuthenticateAdmin";

export const AdminRoute = () => {
  // Auth and loading state
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  // Consume UserContext
  const { SetUserInfo } = useContext(UserContext);

  // useEffect to check user auth on first render
  useEffect(() => {
    AuthenticateAdmin(setLoading, setAuth, SetUserInfo);
  }, []);

  return loading ? (
    <div>loading...</div>
  ) : auth ? (
    <Outlet />
  ) : (
    <Navigate to="/forbidden" />
  );
};

/*
 * Note: If auth state is TRUE, it is admin therefore allowing access
 */
