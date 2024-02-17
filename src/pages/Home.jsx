import { Navbar } from "../components/layout/Navbar";
import { color } from "../data/constants";
import { Box, Stack, Typography, Button } from "@mui/material";
import coffeeIcon from "../assets/coffee.gif";
import "../assets/logofont.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const imageStyle = {
    boxSizing: "border-box",
    objectFit: "cover",
  };
  return (
    <>
      {/* Navbar */}
      <Navbar />

      <Box
        sx={{
          width: { xs: "80%", lg: "80%" },
          margin: "50px auto",
          direction: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Coffee icon container */}
        <Box
          sx={{
            width: { xs: "80%", sm: "550px", md: "700px" },
            height: { xs: "200px", sm: "300px", md: "400px" },
            margin: "auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src={coffeeIcon} alt="coffee icon" style={imageStyle} />
        </Box>

        {/* Sub text */}
        <Typography
          fontFamily="PoorStory"
          variant="h3"
          fontWeight="bold"
          textAlign="center"
          color={color.chocolate}
        >
          Brewing Happiness, One Cup at a Time!
        </Typography>

        {/* To shop button */}
        <Stack
          direction="row"
          justifyContent="center"
          marginTop={3}
          marginBottom={25}
        >
          <Link
            to="/shop"
            style={{
              width: "100%",
              textAlign: "center",
            }}
          >
            <Button
              disableElevation
              disableRipple
              variant="contained"
              size="large"
              sx={{
                width: { xs: "60%", sm: "50%", md: "30%" },
                bgcolor: color.green,
                "&:hover": { color: color.white, bgcolor: color.darkgreen },
              }}
            >
              Shop Now
            </Button>
          </Link>
        </Stack>
      </Box>
    </>
  );
};
