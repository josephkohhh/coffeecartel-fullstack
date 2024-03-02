/*
 * File: UserContext.jsx
 * Author: Joseph Koh
 * Description: Represents a context to share user data across the component tree
 */

import { createContext } from "react";
import { useUserState } from "../hooks/UseUserState";

// Create context
export const UserContext = createContext();

// Context Provider
export const UserContextProvider = ({ children }) => {
  // Get state/functions from useUserState hook
  const { user, setUser, SetUserInfo } = useUserState();

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        SetUserInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
