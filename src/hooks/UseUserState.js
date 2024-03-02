/*
 * File: UseUserState.js
 * Author: Joseph Koh
 * Description: Represent a custom hook to manage user state/functions
 */

import {
  saveToLocalStorage,
  getFromLocalStorage,
  clearFromLocalStorage,
} from "../services/LocalStorage";
import { useState } from "react";

export const useUserState = () => {
  // State and functions
  const [user, setUser] = useState({
    token: "",
    role: "",
    firstname: "",
    lastname: "",
    address: "",
  });

  // Function to set user info
  const SetUserInfo = (user) => {
    setUser((prev) => ({
      ...prev,
      token: user.token,
      role: user.role,
      firstname: user.firstname,
      lastname: user.lastname,
      address: user.address,
    }));

    saveToLocalStorage("token", user.token);
  };

  return {
    user,
    setUser,
    SetUserInfo,
  };
};
