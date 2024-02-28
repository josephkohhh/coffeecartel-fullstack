/*
 * File: Header.jsx
 * Author: Joseph Koh
 * Description: Represents the login/register header
 */

import { Box } from "@mui/material";
import { color } from "../../data/constants";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    // Header
    <Box
      sx={{
        bgcolor: color.cheese,
        borderRadius: "0 0 25px 25px",
        border: "1px solid #DDDDDD",
      }}
      p={4}
    >
      <Logo />
    </Box>
  );
};
