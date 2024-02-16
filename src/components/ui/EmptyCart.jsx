/*
 * File: EmptyCart.jsx
 * Author: Joseph Koh
 * Description: Represents an empty cart
 */

import { Box, Typography } from "@mui/material";
import emptyCup from "../../assets/empty-cup.png";
import { color } from "../../data/constants";

export const EmptyCart = () => {
  return (
    // Empty cart
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      marginTop={5}
    >
      {/* Image container */}
      <Box sx={{ width: { xs: "90px", sm: "100px", md: "90px" } }}>
        <img src={emptyCup} alt="empty-cup" style={{ width: "100%" }}></img>
      </Box>

      <Typography variant="h6" textAlign="center" marginTop={1.5}>
        Your Cart is Empty!
      </Typography>
    </Box>
  );
};
