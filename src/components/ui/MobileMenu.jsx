/*
 * File: MobileMenu.jsx
 * Author: Joseph Koh
 * Description: Represents the nav mobile menu
 */

import MenuIcon from "@mui/icons-material/Menu";
import { color } from "../../data/constants";
import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { UseWindowResize } from "../../hooks/UseWindowResize";
import { Link } from "react-router-dom";

export const MobileMenu = () => {
  // State and functions for handling menu open/close
  const [anchorEl, setAnchorEl] = useState(null);
  const handleOpenMenu = (event) => setAnchorEl(event.currentTarget);
  const handleCloseMenu = () => setAnchorEl(null);

  // State and functions for handling submenu open/close
  const [subAnchorEl, setSubAnchorEl] = useState(null);
  const handleOpenSubMenu = (event) => setSubAnchorEl(event.currentTarget);
  const handleCloseSubMenu = () => {
    setSubAnchorEl(null);
    handleCloseMenu();
  };

  // Function to close mobile menu upon window resize
  UseWindowResize(handleCloseMenu, handleCloseSubMenu);

  const linkStyle = {
    color: color.black,
    textDecoration: "none",
  };
  return (
    <>
      {/* Hamburger menu */}
      <MenuIcon
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
          <MenuItem>Cart</MenuItem>
        </Link>

        <MenuItem disabled onClick={handleOpenSubMenu}>
          Account
        </MenuItem>
      </Menu>

      {/* Sub menu for account link */}
      <Menu
        anchorEl={subAnchorEl}
        open={Boolean(subAnchorEl)}
        onClose={handleCloseSubMenu}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Login</MenuItem>
        <MenuItem>Sign Up</MenuItem>
      </Menu>
    </>
  );
};
