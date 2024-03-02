/*
 * File: UserProfileButton.jsx
 * Author: Joseph Koh
 * Description: Represents the user profile button
 */

import { Button, Menu, MenuItem } from "@mui/material";
import { color } from "../../data/constants";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { UseWindowResize } from "../../hooks/UseWindowResize";
import { Link } from "react-router-dom";

export const UserProfileButton = ({ user }) => {
  // State and functions for handling menu open/close
  const [anchorEl, setAnchorEl] = useState(null);
  const handleOpenMenu = (event) => setAnchorEl(event.currentTarget);
  const handleCloseMenu = () => setAnchorEl(null);

  // Function to close menu upon window resize
  UseWindowResize(handleCloseMenu);

  const linkStyle = {
    color: color.black,
    textDecoration: "none",
  };
  return (
    <>
      {/* Profile icon button */}
      <Button
        disableRipple
        onClick={handleOpenMenu}
        startIcon={<AccountCircleOutlinedIcon />}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          color: color.black,
          "&:hover": {
            fontWeight: "bold",
            color: color.chocolate,
            bgcolor: "inherit",
          },
        }}
      >
        {user.firstname}
      </Button>

      {/* Account menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Link style={linkStyle} to="/">
          <MenuItem>Profile</MenuItem>
        </Link>

        <Link style={linkStyle} to="/">
          <MenuItem>Logout</MenuItem>
        </Link>
      </Menu>
    </>
  );
};
