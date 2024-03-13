/*
 * File: OrderMaster.jsx
 * Author: Joseph Koh
 * Description: Responsible for managing order display
 */

import { Box, Typography, Divider } from "@mui/material";
import { color } from "../../data/constants";
import { OrderItem } from "./OrderItem";
import { EmptyCart } from "../ui/EmptyCart";
import { GetOrder } from "../../services/OrderApi";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";

export const OrderMaster = () => {
  const [orderedItemList, setOrderItemList] = useState({}); // State to manage order list
  const [errorMessage, setErrorMessage] = useState(null); // State to manage error message

  // Consume user context
  const { user } = useContext(UserContext);

  // Function to handle fetching order list
  const fetchOrder = async (username) => {
    try {
      const res = await GetOrder(username); // API call

      if (res.data.status === 200 && res.data.orderedItems) {
        setOrderItemList(res.data.orderedItems);
      } else {
        setOrderItemList({});
      }
    } catch (error) {
      setErrorMessage("Connection refused. Please try again");
    }
  };

  // useEffect to render order list on component mount
  useEffect(() => {
    fetchOrder(user.username);
  }, []);

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

      {/* Render error message or ordered list or empty order */}
      {errorMessage ? (
        <>
          {/* Error message */}
          <Typography variant="body1" color={color.red} marginY={2}>
            {errorMessage}
          </Typography>
        </>
      ) : orderedItemList.length ? (
        <>
          {/* Ordered item list */}
          {orderedItemList.map((i, index) => (
            <OrderItem key={index} i={i} />
          ))}
        </>
      ) : (
        <>
          {/* Empty list */}
          <EmptyCart>You Have No Current Orders</EmptyCart>
        </>
      )}
    </Box>
  );
};
