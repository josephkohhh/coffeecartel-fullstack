/*
 * File: LoadingScreen.jsx
 * Author: Joseph Koh
 * Description: Represents the loading screen
 */

import { Box, Stack, Typography } from "@mui/material";
import loadingIcon from "../../assets/loading.gif";

export const LoadingScreen = () => {
  const imageStyle = {
    boxSizing: "border-box",
    objectFit: "cover",
  };
  return (
    <Box
      sx={{
        width: { xs: "80%", lg: "80%" },
        margin: "120px auto",
        direction: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Loading icon container */}
      <Box
        sx={{
          width: { xs: "80%", sm: "550px", md: "600px" },
          height: { xs: "200px", sm: "300px", md: "300px" },
          margin: "auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src={loadingIcon} alt="loading icon" style={imageStyle} />
      </Box>
      {/* Sub text */}
      <Typography variant="body1" fontWeight="bold" textAlign="center">
        Loading... Spinning up Linux server instance
        <br />
        I'm using free hosting provider {"(:"}
      </Typography>
    </Box>
  );
};
