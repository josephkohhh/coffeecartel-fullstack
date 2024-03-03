/*
 * File: AuthenticateAdmin.js
 * Author: Joseph Koh
 * Description: Contains helper function to authenticate admin
 */

import { Authenticate } from "../services/UserApi";

// Function to authenticate admin
export const AuthenticateAdmin = async (setLoading, setAuth, SetUserInfo) => {
  try {
    const res = await Authenticate(); // API Call --> returns decoded user obj

    // Success
    if (res.data.status === 200 && res.data.user.role === "admin") {
      SetUserInfo(res.data.user);
      setAuth(true);
    }
    // Fail
    else {
      setAuth(false);
    }
  } catch (error) {
    setAuth(false);
  } finally {
    setLoading(false);
  }
};
