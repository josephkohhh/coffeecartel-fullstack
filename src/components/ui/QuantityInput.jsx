/*
 * File: QuantityInput.jsx
 * Author: Joseph Koh
 * Description: Represents a number input field
 */

import { TextField } from "@mui/material";

export const QuantityInput = ({ value, onChange }) => {
  return (
    <TextField
      label="Quantity"
      type="number"
      size="small"
      value={value}
      onChange={onChange}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};
