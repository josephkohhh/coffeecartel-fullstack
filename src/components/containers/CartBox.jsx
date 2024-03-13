/*
 * File: CartBox.jsx
 * Author: Joseph Koh
 * Description: Represents a cart item
 */

import { Typography, Stack, Box, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { QuantityInput } from "../ui/QuantityInput";
import { useEffect, useState } from "react";

export const CartBox = ({
  cartItem,
  DeleteCartItem,
  UpdateCartItemQuantity,
}) => {
  // State to manage qty
  const [quantity, setQuantity] = useState(cartItem.qty);

  // Function to handle quantity change
  const handleChangeQuantity = (id, event) => {
    let newQuantity = event.target.value;

    newQuantity = newQuantity.replace(/\D/, ""); // Remove any non-numeric characters
    newQuantity = parseInt(newQuantity, 10); // Convert the value to an integer

    // Validation (below 1 or above 10)
    if (newQuantity < 1 || newQuantity > 10) {
      newQuantity = 1;
    }

    setQuantity(newQuantity);
    UpdateCartItemQuantity(id, newQuantity);
  };

  // Function to update cart displayed qty on change
  // This solves -> add to cart same product 2 or more times and displayed qty dont reflect correctly
  useEffect(() => {
    setQuantity(cartItem.qty);
  }, [cartItem.qty]);

  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      margin={1.5}
    >
      {/* Image and delete button container  */}
      <Stack direction="row" justifyContent="space-between">
        {/* Image */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: { xs: "80px", sm: "100px", md: "120px", lg: "130px" },
            borderRadius: "10px",
            border: "1px solid #DCDCDC",
          }}
        >
          <img
            src={cartItem.image}
            alt={cartItem.image}
            style={{
              width: "100%",
              transform: "scale(0.6)",
            }}
          ></img>
        </Box>

        {/* Delete button (mobile) */}
        <Stack display={{ xs: "flex", md: "none" }}>
          <IconButton onClick={() => DeleteCartItem(cartItem.id)}>
            <DeleteIcon />
          </IconButton>
        </Stack>
      </Stack>

      {/* Product info (name, desc, qty, total & delete btn) container*/}
      <Stack
        direction="column"
        width="100%"
        marginBottom={2}
        paddingLeft={{ xs: 0, md: 1 }}
      >
        {/* Name, desc, qty & delete btn wrapper*/}
        <Stack direction="row" flexGrow={1}>
          {/* name, desc, qty */}
          <Stack direction="column" flexGrow={1} padding={1}>
            <Typography variant="body1">{cartItem.name}</Typography>
            <Typography variant="caption">{cartItem.desc}</Typography>
            <Box width="100px" marginTop={1}>
              <QuantityInput
                value={quantity}
                onChange={() => handleChangeQuantity(cartItem.id, event)}
              />
            </Box>
          </Stack>

          {/* Delete button (non-mobile) */}
          <Stack display={{ xs: "none", md: "flex" }}>
            <IconButton onClick={() => DeleteCartItem(cartItem.id)}>
              <DeleteIcon />
            </IconButton>
          </Stack>
        </Stack>

        {/* total */}
        <Stack direction={"row"} justifyContent={"flex-end"}>
          <Typography variant="h6">
            ${(cartItem.price * cartItem.qty).toFixed(2)}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};
