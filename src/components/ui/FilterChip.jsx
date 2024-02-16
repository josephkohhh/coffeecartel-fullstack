/*
 * File: FilterChip.jsx
 * Author: Joseph Koh
 * Description: Represents a remove filter chip
 */

import { Chip } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { color } from "../../data/constants";

export const FilterChip = ({ onDelete }) => {
  return (
    <Chip
      label="Clear Filter"
      variant="outlined"
      deleteIcon={<ClearIcon />}
      onDelete={onDelete}
      sx={{
        color: color.black,
        fontSize: { xs: ".6rem", sm: ".7rem", md: ".8rem" },
      }}
    ></Chip>
  );
};
