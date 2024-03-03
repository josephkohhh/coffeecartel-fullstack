/*
 * File: PublicRoute.jsx
 * Author: Joseph Koh
 * Description: Defines a public route
 */

import { Outlet, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { AuthenticatePublic } from "./AuthenticatePublic";

export const PublicRoute = () => {
  // Auth and loading state
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  // Consume UserContext
  const { SetUserInfo } = useContext(UserContext);

  // useEffect to check user auth on first render
  useEffect(() => {
    AuthenticatePublic(setLoading, setAuth, SetUserInfo);
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
 * Note: If auth state is TRUE, it is public therefore allowing access
 */
