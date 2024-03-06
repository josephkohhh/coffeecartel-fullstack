/*
 * File: AuthenticateUser.js
 * Author: Joseph Koh
 * Description: Contains helper function to authenticate user
 */

import { Authenticate } from "../services/UserApi";
import { getFromLocalStorage } from "../services/LocalStorage";

// Function to authenticate user
export const AuthenticateUser = async (setLoading, setAuth, SetUserInfo) => {
  try {
    // Check if there is no token in localStorage
    // For public
    if (getFromLocalStorage("token") === null) {
      setAuth(true);
    }
    // For user/admin
    else {
      const res = await Authenticate(); // API Call --> returns decoded user obj

      // Success --> dont allow admin to access
      if (res.data.status === 200 && res.data.user.role === "admin") {
        setAuth(false);
      }
      // Success --> for user
      else if (res.data.status === 200 && res.data.user.role === "user") {
        SetUserInfo(res.data.user);
        setAuth(true);
      }
      // Fail -> for public
      else {
        setAuth(true);
      }
    }
  } catch (error) {
    setAuth(true);
  } finally {
    setLoading(false);
  }
};
