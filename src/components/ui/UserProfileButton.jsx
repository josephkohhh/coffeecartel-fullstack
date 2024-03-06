/*
 * File: UserProfileButton.jsx
 * Author: Joseph Koh
 * Description: Represents the Admin profile button
 */

import { Button, Menu, MenuItem } from "@mui/material";
import { color } from "../../data/constants";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { UseWindowResize } from "../../hooks/UseWindowResize";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export const UserProfileButton = ({ user }) => {
  // State and functions for handling menu open/close
  const [anchorEl, setAnchorEl] = useState(null);
  const handleOpenMenu = (event) => setAnchorEl(event.currentTarget);
  const handleCloseMenu = () => setAnchorEl(null);

  // Function to close menu upon window resize
  UseWindowResize(handleCloseMenu);

  // Consume UserContext
  const { LogOut } = useContext(UserContext);

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
        {user.fname}
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
        <Link style={linkStyle} to="/profile">
          <MenuItem>Profile</MenuItem>
        </Link>

        <Link style={linkStyle} to="/home">
          <MenuItem onClick={LogOut}>Logout</MenuItem>
        </Link>
      </Menu>
    </>
  );
};
