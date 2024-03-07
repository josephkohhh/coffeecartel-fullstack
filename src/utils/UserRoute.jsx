/*
 * File: UserRoute.jsx
 * Author: Joseph Koh
 * Description: Defines a user route
 */

import { Outlet, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { AuthenticateUser } from "./AuthenticateUser";
import { LoadingScreen } from "../components/ui/LoadingScreen";

export const UserRoute = () => {
  // Auth and loading state
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  // Consume UserContext
  const { SetUserInfo } = useContext(UserContext);

  // useEffect to check user auth on first render
  useEffect(() => {
    AuthenticateUser(setLoading, setAuth, SetUserInfo);
  }, []);

  return loading ? (
    <LoadingScreen />
  ) : auth ? (
    <Outlet />
  ) : (
    <Navigate to="/forbidden" />
  );
};

/*
 * Note: If auth state is TRUE, it is public/user therefore allowing access
 */
