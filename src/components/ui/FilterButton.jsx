/*
 * File: FilterButton.jsx
 * Author: Joseph Koh
 * Description: Represents a filter button for mobile screen size
 */

import { Button } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import { color } from "../../data/constants";

export const FilterButton = ({ onClick }) => {
  return (
    // Filter button
    <Button
      disableElevation
      disableRipple
      endIcon={<TuneIcon />}
      variant="contained"
      size="small"
      sx={{
        width: "90px",
        color: color.black,
        bgcolor: color.white,
        border: "1px solid grey",
        "&:hover": {
          bgcolor: color.dull,
        },
      }}
      onClick={onClick}
    >
      Filter
    </Button>
  );
};
