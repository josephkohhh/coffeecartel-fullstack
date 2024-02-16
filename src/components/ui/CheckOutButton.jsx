/*
 * File: CheckOutButton.jsx
 * Author: Joseph Koh
 * Description: Represents a checkout button
 */

import { LoadingButton } from "@mui/lab";
import { color } from "../../data/constants";

export const CheckOutButton = ({ onClick, disabled, loading, children }) => {
  // Checkout button
  return (
    <LoadingButton
      disableElevation
      disableRipple
      variant="contained"
      size="large"
      disabled={disabled || loading}
      loading={loading}
      onClick={onClick}
      sx={{
        width: { xs: "100%", sm: "80%", md: "100%" },
        bgcolor: color.green,
        "&:hover": { color: color.white, bgcolor: color.darkgreen },
      }}
    >
      {children}
    </LoadingButton>
  );
};
