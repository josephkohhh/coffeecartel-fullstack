/*
 * File: AppTitle.jsx
 * Author: Joseph Koh
 * Description: Represents an app title
 */

import { Stack, Typography } from "@mui/material";
import { color } from "../../data/constants";

export const AppTitle = ({ children }) => {
  return (
    // Title
    <Stack
      direction="row"
      justifyContent="center"
      textAlign="center"
      margin={4}
    >
      <Typography variant="h3" color={color.chocolate}>
        {children}
      </Typography>
    </Stack>
  );
};
