/*
 * File: UserProfileMenu.jsx
 * Author: Joseph Koh
 * Description: Represents the nav mobile menu
 */

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { color } from "../../data/constants";
import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { UseWindowResize } from "../../hooks/UseWindowResize";
import { Link } from "react-router-dom";

export const UserProfileMenu = () => {
  // State and functions for handling menu open/close
  const [anchorEl, setAnchorEl] = useState(null);
  const handleOpenMenu = (event) => setAnchorEl(event.currentTarget);
  const handleCloseMenu = () => setAnchorEl(null);

  // Function to close mobile menu upon window resize
  UseWindowResize(handleCloseMenu);

  const linkStyle = {
    color: color.black,
    textDecoration: "none",
  };
  return (
    <>
      {/* Hamburger menu */}
      <AccountCircleOutlinedIcon
        sx={{
          display: { xs: "flex", sm: "none" },
          color: color.black,
        }}
        onClick={handleOpenMenu}
      />

      {/* Main menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <Link style={linkStyle} to="/cart">
          <MenuItem>Profile</MenuItem>
        </Link>

        <Link style={linkStyle} to="/cart">
          <MenuItem>Logout</MenuItem>
        </Link>
      </Menu>
    </>
  );
};
