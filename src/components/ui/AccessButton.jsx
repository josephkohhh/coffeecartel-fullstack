/*
 * File: AccessButton.jsx
 * Author: Joseph Koh
 * Description: Represents the login button
 */

import { Button } from "@mui/material";
import { color } from "../../data/constants";

export const AccessButton = ({ type, children }) => {
  return (
    <Button
      type={type}
      variant="contained"
      disableRipple
      disableElevation
      sx={{
        height: "45px",
        fontSize: "16px",
        bgcolor: color.green,
        "&:hover": { bgcolor: color.darkgreen },
      }}
    >
      {children}
    </Button>
  );
};
