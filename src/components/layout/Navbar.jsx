/*
 * File: Navbar.jsx
 * Author: Joseph Koh
 * Description: Represents the app navbar
 */

import { AppBar, Toolbar, Box, Stack } from "@mui/material";
import { color, navLinks } from "../../data/constants";
import { CartNavButton } from "../ui/CartNavButton";
import { AccountNavButton } from "../ui/AccountNavButton";
import { Logo } from "../ui/Logo";
import { NavButtonLinks } from "../ui/NavButtonLinks";
import { MobileMenu } from "../ui/MobileMenu";
import { Link } from "react-router-dom";

export const Navbar = () => {
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
            flexDirection: "column",
            marginTop: 1.5,
          }}
        >
          {/* Top layer nav (non-mobile) */}
          <Stack
            direction="row"
            justifyContent="flex-end"
            display={{ xs: "none", sm: "flex" }}
          >
            <Link to="/cart">
              <CartNavButton />
            </Link>

            <AccountNavButton />
          </Stack>
          {/* Top layer nav (mobile) */}
          <Stack
            direction="row"
            justifyContent="flex-end"
            display={{ xs: "flex", sm: "none" }}
          >
            <MobileMenu />
          </Stack>

          {/* Middle layer nav */}
          <Stack direction="row" justifyContent="center">
            <Logo />
          </Stack>

          {/* Bottom layer nav */}
          <Stack direction="row" justifyContent="center" spacing={1.5} mb={0.5}>
            {navLinks.map((link, index) => (
              <Link to={link.path} key={index}>
                <NavButtonLinks>{link.label}</NavButtonLinks>
              </Link>
            ))}
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
