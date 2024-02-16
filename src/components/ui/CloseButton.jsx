/*
 * File: CloseButton.jsx
 * Author: Joseph Koh
 * Description: Represents a close button
 */

import { Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { color } from "../../data/constants";

export const CloseButton = ({ onClick }) => {
  return (
    // Close button
    <Stack direction={"row"} justifyContent={"flex-end"}>
      <CloseIcon
        fontSize="large"
        sx={{
          color: color.grey,
          cursor: "pointer",
          "&:hover": { color: color.black },
        }}
        onClick={onClick}
      />
    </Stack>
  );
};
