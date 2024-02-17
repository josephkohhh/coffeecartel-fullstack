/*
 * File: CartNavButton.jsx
 * Author: Joseph Koh
 * Description: Represents the cart nav button
 */

import { Button, Badge } from "@mui/material";
import { color } from "../../data/constants";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartNavButton = ({ onClick }) => {
  // Consume CartContext
  const { cartList } = useContext(CartContext);

  return (
    // Cart nav button
    <Badge
      badgeContent={cartList.length}
      overlap="circular"
      color="error"
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
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
    </Badge>
  );
};
