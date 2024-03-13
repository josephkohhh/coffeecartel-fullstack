/*
 * File: OrderMaster.jsx
 * Author: Joseph Koh
 * Description: Responsible for managing order display
 */

import { Box, Typography, Divider } from "@mui/material";
import { color } from "../../data/constants";
import { OrderItem } from "./OrderItem";
import { EmptyCart } from "../ui/EmptyCart";

export const OrderMaster = () => {
  return (
    // OrderMaster
    <Box
      sx={{
        flexDirection: "column",
        width: { xs: "90%", md: "70%", lg: "60%" },
        minHeight: "400px",
        margin: "40px auto",

        bgcolor: color.dull,
      }}
    >
      {/* Title */}
      <Typography variant="h5" marginBottom={1}>
        Order Item(s)
      </Typography>

      <Divider />

      {/* Ternary operator based on arraylist length */}
      <OrderItem />
      <OrderItem />

      {/* <EmptyCart>You Have No Current Orders</EmptyCart> */}
    </Box>
  );
};
