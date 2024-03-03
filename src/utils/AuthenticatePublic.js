/*
 * File: AuthenticatePublic.js
 * Author: Joseph Koh
 * Description: Contains helper function to authenticate public
 */

import { Authenticate } from "../services/UserApi";
import { getFromLocalStorage } from "../services/LocalStorage";

// Function to authenticate public
export const AuthenticatePublic = async (setLoading, setAuth, SetUserInfo) => {
  try {
    if (getFromLocalStorage("token") === null) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  } catch (error) {
    setAuth(false);
  } finally {
    setLoading(false);
  }
};
