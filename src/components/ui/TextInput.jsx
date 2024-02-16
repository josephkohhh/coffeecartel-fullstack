/*
 * File: TextInput.jsx
 * Author: Joseph Koh
 * Description: Represents a text input field
 */

import { TextField } from "@mui/material";
import { color } from "../../data/constants";

export const TextInput = ({ placeholder, value, onChange, InputProps }) => {
  return (
    // Text input
    <TextField
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      InputProps={InputProps}
      sx={{
        width: { xs: "75%", sm: "60%", md: "500px" },
        bgcolor: color.white,
      }}
    />
  );
};
