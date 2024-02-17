/*
 * File: Shop.jsx
 * Author: Joseph Koh
 * Description: Represents the main page for shop
 */

import { Box } from "@mui/material";
import { color } from "../data/constants";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { AppTitle } from "../components/ui/AppTitle";
import { ProductMaster } from "../components/containers/ProductMaster";

export const Shop = () => {
  return (
    <Box bgcolor={color.dull}>
      {/*  Navbar */}
      <Navbar />

      {/*  Title */}
      <AppTitle>Caffeine and Kindness in Every Cup</AppTitle>

      {/* Product display container */}
      <ProductMaster />

      {/*  Footer */}
      <Footer />
    </Box>
  );
};
