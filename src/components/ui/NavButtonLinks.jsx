/*
 * File: NavButtonLinks.jsx
 * Author: Joseph Koh
 * Description: Represents the nav button links
 */

import { Button } from "@mui/material";
import { color } from "../../data/constants";

export const NavButtonLinks = ({ children }) => {
  return (
    // Nav button links
    <Button
      disableRipple
      size="small"
      sx={{
        color: color.black,
        "&:hover": {
          fontWeight: "bold",
          color: color.chocolate,
          bgcolor: "inherit",
        },
      }}
    >
      {children}
    </Button>
  );
};
