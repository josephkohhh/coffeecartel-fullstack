/*
 * File: CartList.jsx
 * Author: Joseph Koh
 * Description: Responsible for managing cartList
 */

import { Typography, Stack, Box, Divider, Button } from "@mui/material";
import { CartBox } from "./CartBox";
import { EmptyCart } from "../ui/EmptyCart";

export const CartList = ({
  cartList,
  ClearCart,
  DeleteCartItem,
  UpdateCartItemQuantity,
}) => {
  return (
    // CartList container
    <Box p={2.5}>
      {/* Cart title */}
      <Typography variant="h5" marginBottom={0.5}>
        Your Cart - {cartList.length} Item(s)
      </Typography>

      <Divider />

      {/* Clear all button */}
      <Stack direction={"row"} justifyContent={"flex-end"} marginTop={1}>
        <Button
          color="error"
          disabled={cartList.length === 0}
          onClick={ClearCart}
        >
          Clear All
        </Button>
      </Stack>

      {cartList.length === 0 ? (
        <EmptyCart />
      ) : (
        // Cart item(s)
        cartList.map((cartItem, index) => (
          <Stack key={index}>
            <CartBox
              cartItem={cartItem}
              DeleteCartItem={DeleteCartItem}
              UpdateCartItemQuantity={UpdateCartItemQuantity}
            />
            <Divider />
          </Stack>
        ))
      )}
    </Box>
  );
};
