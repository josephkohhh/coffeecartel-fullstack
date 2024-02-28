/*
 * File: RegisterInput.jsx
 * Author: Joseph Koh
 * Description: Represents a login input field
 */

import { TextField } from "@mui/material";

export const RegisterInput = ({
  type,
  label,
  value,
  onChange,
  InputProps,
  sx,
}) => {
  return (
    // Register input
    <TextField
      type={type}
      label={label}
      value={value}
      onChange={onChange}
      InputProps={InputProps}
      sx={sx}
    />
  );
};
