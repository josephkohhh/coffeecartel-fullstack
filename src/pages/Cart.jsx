/*
 * File: Cart.jsx
 * Author: Joseph Koh
 * Description: Represents the main page for cart
 */

import { Navbar } from "../components/layout/Navbar";
import { CartMaster } from "../components/containers/CartMaster";
import { Footer } from "../components/layout/Footer";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";

export const Cart = () => {
  // Consume cart context
  const { user } = useContext(UserContext);

  // If not logged in, redirect to login page
  return user.fname ? (
    <>
      {/*  Navbar */}
      <Navbar />

      {/* Cart display container */}
      <CartMaster />

      {/*  Footer */}
      <Footer />
    </>
  ) : (
    <>
      <Navigate to="/login" />
    </>
  );
};
