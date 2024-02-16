/*
 * File: EmptyList.jsx
 * Author: Joseph Koh
 * Description: Represents an empty product list
 */

import { Box, Typography } from "@mui/material";
import coffeeStand from "../../assets/coffee-stand.png";
import { color } from "../../data/constants";

export const EmptyList = () => {
  return (
    // Empty list
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      marginTop={5}
    >
      <Box sx={{ width: { xs: "150px", sm: "200px", md: "250px" } }}>
        <img src={coffeeStand} alt="coffee-stand" width="100%"></img>
      </Box>

      <Typography
        variant="h4"
        textAlign={"center"}
        color={color.grey}
        marginTop={4}
      >
        Oops! No coffee clique for this one
      </Typography>
    </Box>
  );
};
