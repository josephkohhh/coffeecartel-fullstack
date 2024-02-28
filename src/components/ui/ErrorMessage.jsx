/*
 * File: ErrorMessage.jsx
 * Author: Joseph Koh
 * Description: Represents the error message
 */

import { Typography } from "@mui/material";
import { color } from "../../data/constants";

export const ErrorMessage = ({ children, sx }) => {
  return (
    <Typography variant="body1" color={color.red} sx={sx}>
      {children}
    </Typography>
  );
};
