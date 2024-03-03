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
    fname: "",
    lname: "",
    address: "",
  });

  // Function to set user info
  const SetUserInfo = (user) => {
    setUser((prev) => ({
      ...prev,
      fname: user.fname,
      lname: user.lname,
      address: user.address,
    }));
  };

  // Function to log out
  const LogOut = () => {
    setUser({
      fname: "",
      lname: "",
      address: "",
    });
    clearFromLocalStorage("token");
  };

  return {
    user,
    SetUserInfo,
    LogOut,
  };
};
