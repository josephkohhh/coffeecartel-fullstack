/*
 * File: CategoryButton.jsx
 * Author: Joseph Koh
 * Description: Represents a category
 */

import { Button } from "@mui/material";
import { color } from "../../data/constants";

export const CategoryButton = ({ children }) => {
  return (
    // Category button
    <Button
      disableElevation
      disableRipple
      variant="contained"
      size="small"
      sx={{
        fontSize: ".7rem",
        color: color.lightChocolate,
        backgroundColor: color.cheese,
        border: "1px solid grey",
        borderRadius: "10px",
        "&:hover": { bgcolor: color.cheese },
      }}
    >
      {children}
    </Button>
  );
};
