/*
 * File: Admin.jsx
 * Author: Joseph Koh
 * Description: Represents the admin dashboard page
 */

import { Box } from "@mui/material";
import { AdminNavbar } from "../components/layout/AdminNavbar";
import { AppTitle } from "../components/ui/AppTitle";
import { AdminMaster } from "../components/containers/AdminMaster";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const Admin = () => {
  // Consume UserContext
  const { user, setUser } = useContext(UserContext);

  return (
    <Box>
      {/* Admin navbar */}
      <AdminNavbar user={user}></AdminNavbar>

      {/* Title */}
      <AppTitle>Admin Dashboard</AppTitle>

      {/* Admin dashboard */}
      <AdminMaster />
    </Box>
  );
};
