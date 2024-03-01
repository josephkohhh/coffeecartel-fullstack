/*
 * File: Admin.jsx
 * Author: Joseph Koh
 * Description: Represents the admin dashboard page
 */

import { Box } from "@mui/material";
import { AdminNavbar } from "../components/layout/AdminNavbar";
import { AppTitle } from "../components/ui/AppTitle";
import { AdminMaster } from "../components/containers/AdminMaster";

export const Admin = () => {
  return (
    <Box>
      {/* Admin navbar */}
      <AdminNavbar></AdminNavbar>

      {/* Title */}
      <AppTitle>Admin Dashboard</AppTitle>

      {/* Admin dashboard */}
      <AdminMaster />
    </Box>
  );
};
