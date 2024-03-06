/*
 * File: AccountNavButton.jsx
 * Author: Joseph Koh
 * Description: Represents the account nav button
 */

import { Button, Menu, MenuItem } from "@mui/material";
import { color } from "../../data/constants";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { UseWindowResize } from "../../hooks/UseWindowResize";
import { Link } from "react-router-dom";

export const AccountNavButton = ({ user, LogOut }) => {
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
      {/* Account nav button */}
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
        {user.fname ? user.fname : "Account"}
      </Button>

      {/* Account menu */}
      {user.fname ? (
        <>
          {/* Logged in account menu */}
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

            <Link style={linkStyle}>
              <MenuItem>Orders</MenuItem>
            </Link>

            <Link style={linkStyle} to="/home">
              <MenuItem onClick={LogOut}>Logout</MenuItem>
            </Link>
          </Menu>
        </>
      ) : (
        <>
          {/* Not logged in account menu */}
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
            <Link style={linkStyle} to="/login">
              <MenuItem>Login</MenuItem>
            </Link>

            <Link style={linkStyle} to="/register">
              <MenuItem>Sign Up</MenuItem>
            </Link>
          </Menu>
        </>
      )}
    </>
  );
};
