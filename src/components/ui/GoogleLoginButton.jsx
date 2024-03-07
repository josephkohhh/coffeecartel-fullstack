/*
 * File: GoogleLoginButton.jsx
 * Author: Joseph Koh
 * Description: Represents the google login button
 */

import { Box, Button } from "@mui/material";
import { color } from "../../data/constants";
import googleIcon from "../../assets/googleIcon.png";

export const GoogleLoginButton = ({ onClick }) => {
  return (
    <Button
      variant="contained"
      disableRipple
      disableElevation
      disabled
      onClick={onClick}
      sx={{
        height: "45px",
        fontSize: "16px",
        color: color.grey,
        bgcolor: color.white,
        border: "1px solid #9FA1A1",
        textTransform: "none",
        "&:hover": { bgcolor: color.dull },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <img
          src={googleIcon}
          alt="googleIcon"
          style={{ width: "20px", height: "20px" }}
        />
        <span style={{ marginLeft: "5px" }}>Google</span>
      </Box>
    </Button>
  );
};
