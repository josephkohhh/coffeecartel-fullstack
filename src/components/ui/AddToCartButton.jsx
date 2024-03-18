/*
 * File: AddToCartButton.jsx
 * Author: Joseph Koh
 * Description: Represents the add to cart button
 */

import { Button } from "@mui/material";
import { color } from "../../data/constants";

export const AddToCartButton = ({ onClick, disabled }) => {
  return (
    // Add to cart button
    <Button
      disableRipple
      disableElevation
      disabled={disabled}
      variant="contained"
      size="large"
      sx={{
        paddingY: "5px",
        color: color.dull,
        bgcolor: color.green,
        "&:hover": { color: color.white, bgcolor: color.darkgreen },
      }}
      onClick={onClick}
    >
      Add To Cart
    </Button>
  );
};
