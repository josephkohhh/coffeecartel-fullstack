/*
 * File: Order.jsx
 * Author: Joseph Koh
 * Description: Represents the main page for order
 */

import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";
import { Navbar } from "../components/layout/Navbar";
import { OrderMaster } from "../components/containers/OrderMaster";
import { Footer } from "../components/layout/Footer";
import { Box } from "@mui/material";
import { color } from "../data/constants";

export const Order = () => {
  // Consume cart context
  const { user } = useContext(UserContext);

  // If not logged in, redirect to login page
  return user.fname ? (
    <Box bgcolor={color.dull}>
      {/*  Navbar */}
      <Navbar />

      {/* Order master */}
      <OrderMaster />

      {/*  Footer */}
      <Footer />
    </Box>
  ) : (
    <>
      <Navigate to="/login" />
    </>
  );
};
