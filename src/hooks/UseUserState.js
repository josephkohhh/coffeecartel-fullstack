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
    username: "",
    fname: "",
    lname: "",
    email: "",
    address: "",
  });

  // Function to set user info
  const SetUserInfo = (user) => {
    setUser((prev) => ({
      ...prev,
      username: user.username,
      fname: user.fname,
      lname: user.lname,
      email: user.email,
      address: user.address,
    }));
  };

  // Function to log out
  const LogOut = () => {
    setUser({
      username: "",
      fname: "",
      lname: "",
      email: "",
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
