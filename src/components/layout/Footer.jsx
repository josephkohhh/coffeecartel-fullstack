/*
 * File: Footer.jsx
 * Author: Joseph Koh
 * Description: Represents the app footer navbar
 */

import { Box, Stack, Typography } from "@mui/material";
import { color, footerLinks } from "../../data/constants";
import { Logo } from "../ui/Logo";
import { NavButtonLinks } from "../ui/NavButtonLinks";

export const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: color.cheese,
        marginTop: "200px",
        paddingX: "10px",
        borderTop: "1px solid #d2d2d2",
        borderRadius: "25px 25px 0 0",
      }}
    >
      {/* Footer logo & navlinks container */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent={"space-between"}
        marginTop="50px"
        marginX={{ xs: "20px", sm: "80px" }}
      >
        <Logo />

        <Stack direction={"row"} spacing={2}>
          {footerLinks.map((i, index) => (
            <NavButtonLinks key={index}>{i}</NavButtonLinks>
          ))}
        </Stack>
      </Stack>

      {/* text container */}
      <Stack textAlign={"center"} marginTop={3}>
        <Typography variant="caption" color={color.grey}>
          © CoffeeCartel. 2024, Singapore. All rights reserved
        </Typography>
      </Stack>
      <Stack textAlign={"center"} marginTop={0.5} marginBottom={5}>
        <Typography variant="caption" color={color.grey}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, ad
          fuga. Animi pariatur corrupti distinctio, maiores sapiente ipsa
          similique id laudantium amet, veniam sed, culpa quo officiis
          voluptates temporibus accusantium.
        </Typography>
      </Stack>
    </Box>
  );
};
