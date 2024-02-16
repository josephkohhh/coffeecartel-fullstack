/*
 * File: FontTheme.js
 * Author: Joseph Koh
 * Description: To standardize the font style
 */

import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Create a custom theme called FontTheme
let FontTheme = createTheme({
  // Customize typography settings
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

// Make typography responsive
FontTheme = responsiveFontSizes(FontTheme);

export default FontTheme;
