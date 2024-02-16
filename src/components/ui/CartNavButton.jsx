/*
 * File: CartNavButton.jsx
 * Author: Joseph Koh
 * Description: Represents the cart nav button
 */

import { Button } from "@mui/material";
import { color } from "../../data/constants";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export const CartNavButton = ({ onClick }) => {
  return (
    // Cart nav button
    <Button
      disableRipple
      onClick={onClick}
      startIcon={<ShoppingCartOutlinedIcon />}
      sx={{
        color: color.black,
        "&:hover": {
          fontWeight: "bold",
          color: color.chocolate,
          bgcolor: "inherit",
        },
      }}
    >
      Cart
    </Button>
  );
};
