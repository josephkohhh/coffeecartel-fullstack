/*
 * File: Cart.jsx
 * Author: Joseph Koh
 * Description: Represents the main page for cart
 */

import { Navbar } from "../components/layout/Navbar";
import { CartMaster } from "../components/containers/CartMaster";
import { Footer } from "../components/layout/Footer";

export const Cart = () => {
  return (
    <>
      {/*  Navbar */}
      <Navbar />

      {/* Cart display container */}
      <CartMaster />

      {/*  Footer */}
      <Footer />
    </>
  );
};
