/*
 * File: ProgressButton.jsx
 * Author: Joseph Koh
 * Description: Represents a loading button
 */

import { LoadingButton } from "@mui/lab";
import { CircularProgress } from "@mui/material";
import { color } from "../../data/constants";

export const ProgressButton = () => {
  return (
    // Loading button
    <LoadingButton
      disableElevation
      disableRipple
      loading
      variant="outlined"
      loadingIndicator={<CircularProgress color="inherit" size={20} />}
      sx={{
        width: { xs: "100%", sm: "80%", md: "100%" },
        bgcolor: color.dull,
      }}
    >
      Loading
    </LoadingButton>
  );
};
