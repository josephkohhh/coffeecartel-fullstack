/*
 * File: SuccessMessage.jsx
 * Author: Joseph Koh
 * Description: Represents the success message
 */

import { Typography } from "@mui/material";
import { color } from "../../data/constants";

export const SuccessMessage = ({ children, sx }) => {
  return (
    <Typography variant="body1" color={color.green} sx={sx}>
      {children}
    </Typography>
  );
};
