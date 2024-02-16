/*
 * File: StatusChip.jsx
 * Author: Joseph Koh
 * Description: Represents a product status chip
 */

import { Chip } from "@mui/material";
import { color } from "../../data/constants";

export const StatusChip = ({ label }) => {
  const statusColor =
    label === "New" ? color.green : label === "Out of Stock" ? color.red : "";
  return (
    <Chip
      label={label}
      sx={{
        color: color.white,
        bgcolor: statusColor,
        fontSize: { xs: ".6rem", sm: ".7rem", md: ".75rem" },
      }}
    />
  );
};
