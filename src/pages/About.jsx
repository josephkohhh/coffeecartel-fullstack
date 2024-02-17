/* File: About.jsx
 * Author: Joseph Koh
 * Description: Represents the About page
 */

import { Stack, Box, Typography } from "@mui/material";
import { color } from "../data/constants";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { AppTitle } from "../components/ui/AppTitle";
import componentDiagram from "../assets/component-diagram.png";
import { Diagram } from "../components/ui/Diagram";
import { TableDiagram } from "../components/ui/TableDiagram";
import { AccordionDiagram } from "../components/ui/AccordionDiagram";

export const About = () => {
  return (
    // About container
    <Box bgcolor={color.white}>
      {/* Navbar */}
      <Navbar />

      {/* Title & introduction */}
      <Stack
        width={{ xs: "80%", sm: "80%", md: "60%" }}
        direction="column"
        margin="auto"
        textAlign="center"
        marginY={4}
      >
        <AppTitle>Introducing CoffeeCartel</AppTitle>
        <Typography variant="h6">
          An online coffee store web app leveraging React and Material UI
          design. The goal of this app is to reinforce understanding of React's
          component-based architecture, ensuring a solid grasp of its
          fundamental concepts
        </Typography>
      </Stack>

      {/* Architecture diagram */}
      <Box
        sx={{
          margin: "auto",
          width: { xs: "80%", sm: "550px", md: "700px" },
        }}
      >
        <Diagram src={componentDiagram} alt="component-diagram" />
      </Box>

      {/* Table diagram */}
      <Stack direction="column" textAlign="center" margin="auto" marginY={4}>
        <AppTitle>App Features</AppTitle>
        <Box
          sx={{
            width: { xs: "80%", sm: "80%", md: "60%" },
            margin: "auto",
            marginTop: "24px",
          }}
        >
          <TableDiagram />
        </Box>
      </Stack>

      {/*  Accordion  */}
      <Stack direction="column" textAlign="center">
        <AppTitle>Key Concepts Applied</AppTitle>
        <Box
          sx={{
            width: { xs: "80%", md: "70%" },
            margin: "24px auto 96px auto",
          }}
        >
          <AccordionDiagram />
        </Box>
      </Stack>

      {/* Footer */}
      <Footer />
    </Box>
  );
};
