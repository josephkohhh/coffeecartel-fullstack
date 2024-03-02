/*
 * File: PrivateRoute.jsx
 * Author: Joseph Koh
 * Description: Defines a private route
 */

import { Outlet, Navigate } from "react-router-dom";
import { Authenticate } from "../services/UserApi";
import { useState, useEffect } from "react";

export const PrivateRoute = () => {
  // Auth and loading state
  const [auth, setAuth] = useState(false);

  // Function to authenticate user
  const checkAuthenticate = async () => {
    try {
      const res = await Authenticate(); // API Call

      // Success
      if (res.data.status === 200) {
        setAuth(true);
      }
      // Fail
      else {
        setAuth(false);
      }
    } catch (error) {
      setAuth(false);
    }
  };

  return auth ? <Outlet /> : <Navigate to="/login" />;
};
