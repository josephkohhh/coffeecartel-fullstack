/*
 * File: AccessButton.jsx
 * Author: Joseph Koh
 * Description: Represents the login button
 */

import { color } from "../../data/constants";
import { LoadingButton } from "@mui/lab";

export const AccessButton = ({ loading, type, children }) => {
  return (
    <LoadingButton
      loading={loading}
      type={type}
      variant="contained"
      disableRipple
      disableElevation
      sx={{
        height: "45px",
        fontSize: "16px",
        bgcolor: color.green,
        "&:hover": { bgcolor: color.darkgreen },
      }}
    >
      {children}
    </LoadingButton>
  );
};
