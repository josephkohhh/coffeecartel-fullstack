/*
 * File: Logo.jsx
 * Author: Joseph Koh
 * Description: Represents CoffeeCartel brand logo
 */

import { Typography, Stack } from "@mui/material";
import { color } from "../../data/constants";
import brandLogo from "../../assets/brand-logo.png";
import "../../assets/logofont.css";

export const Logo = () => {
  return (
    // Brand logo
    <Stack direction="row" alignItems="center" spacing={0.5}>
      <img src={brandLogo} alt="Brand Logo" width="35px"></img>
      <Typography fontFamily="PoorStory" variant="h3" color={color.chocolate}>
        CoffeeCartel
      </Typography>
    </Stack>
  );
};
