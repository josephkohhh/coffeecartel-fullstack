/*
 * File: Footer.jsx
 * Author: Joseph Koh
 * Description: Represents the app footer navbar
 */

import { Box, Stack, Typography } from "@mui/material";
import { color, footerLinks } from "../../data/constants";
import { Logo } from "../ui/Logo";
import { NavButtonLinks } from "../ui/NavButtonLinks";
import { Link } from "react-router-dom";
import React from "react";

export const Footer = () => {
  const linkStyle = {
    textDecoration: "none",
    color: color.black,
  };
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
          {footerLinks.map((link, index) => (
            <React.Fragment key={index}>
              {index === 0 ? (
                <a
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  <NavButtonLinks>{link.label}</NavButtonLinks>
                </a>
              ) : (
                <Link to={link.path}>
                  <NavButtonLinks>{link.label}</NavButtonLinks>
                </Link>
              )}
            </React.Fragment>
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
