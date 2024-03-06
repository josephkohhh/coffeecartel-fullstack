/*
 * File: ProfileMaster.jsx
 * Author: Joseph Koh
 * Description: Responsible for managing user profile
 */

import { Grid, Box, Stack, Typography, Divider } from "@mui/material";
import { color } from "../../data/constants";
import { AvatarIcon } from "../ui/AvatarIcon";
import { ProfileForm } from "../form/ProfileForm";

export const ProfileMaster = () => {
  const gridStyle = {
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 8px",
    borderRadius: "10px",
    bgcolor: color.white,
  };
  return (
    <>
      <Box
        sx={{
          width: { xs: "90%", md: "70%", lg: "60%" },
          margin: "40px auto",
          bgcolor: color.white,
        }}
      >
        {/* Profile container */}
        <Grid container rowGap={1} padding={2.5} style={gridStyle}>
          <Grid item xs={12} marginBottom={3}>
            <Stack marginBottom={1}>
              <Typography variant="h6">My Profile</Typography>
              <Typography variant="body2" color={color.grey}>
                Manage your account
              </Typography>
            </Stack>
            <Divider sx={{ color: "#9FA1A1" }} />
          </Grid>

          <Grid item xs={12} sm={5} paddingY={2}>
            <AvatarIcon />
          </Grid>

          <Grid item xs={12} sm={7}>
            <ProfileForm />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
