/*
 * File: Forbidden.jsx
 * Author: Joseph Koh
 * Description: Represents the forbidden page
 */

import { Box, Stack, Typography } from "@mui/material";
import forbiddenIcon from "../assets/forbiddenIcon.png";

export const Forbidden = () => {
  const imageStyle = {
    boxSizing: "border-box",
    objectFit: "cover",
  };
  return (
    <Box
      sx={{
        width: { xs: "80%", lg: "80%" },
        margin: "115px auto",
      }}
    >
      {/* Forbidden icon container */}
      <Box
        sx={{
          width: { xs: "70%", sm: "500px", md: "600px" },
          height: { xs: "200px", sm: "200px", md: "300px" },
          margin: "auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src={forbiddenIcon} alt="forbidden icon" style={imageStyle} />
      </Box>

      {/* Text */}
      <Stack
        direction="column"
        justifyContent="center"
        textAlign="center"
        marginY={4}
      >
        <Typography variant="h3">We are Sorry...</Typography>
        <Typography variant="body1" marginTop={2}>
          The page you're trying to access has restricted access
        </Typography>
        <Typography variant="body1">
          Please refer to your system administrator
        </Typography>
      </Stack>
    </Box>
  );
};
