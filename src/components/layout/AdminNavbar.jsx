/*
 * File: AdminNavbar.jsx
 * Author: Joseph Koh
 * Description: Represents the app navbar
 */

import { AppBar, Toolbar, Box, Stack } from "@mui/material";
import { color } from "../../data/constants";
import { UserProfileButton } from "../ui/UserProfileButton";
import { Logo } from "../ui/Logo";
import { UserProfileMenu } from "../ui/UserProfileMenu";
import { Link } from "react-router-dom";

export const AdminNavbar = ({ user }) => {
  return (
    <AppBar
      elevation={0}
      position="static"
      sx={{
        bgcolor: color.cheese,
        borderRadius: "0 0 25px 25px",
        border: "1px solid #DDDDDD",
      }}
    >
      <Toolbar>
        {/* Navbar content container */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginY: 1.5,
          }}
        >
          {/* Logo */}
          <Logo />

          {/* User profile button */}
          <Stack
            direction="row"
            justifyContent="flex-end"
            display={{ xs: "none", sm: "flex" }}
          >
            <UserProfileButton user={user} />
          </Stack>

          {/* Menu (mobile) */}
          <Stack
            direction="row"
            justifyContent="flex-end"
            display={{ xs: "flex", sm: "none" }}
          >
            <UserProfileMenu />
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
