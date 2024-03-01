/*
 * File: ManageUsers.jsx
 * Author: Joseph Koh
 * Description: Represents the manage user component
 */

import { Box, Stack, Typography } from "@mui/material";
import { color } from "../../data/constants";
import PersonIcon from "@mui/icons-material/Person";

export const ManageUsers = () => {
  return (
    // User container
    <Box
      padding={2}
      sx={{
        ":hover": {
          cursor: "pointer",
          backgroundColor: color.cheese,
          border: "1px solid #DDDDDD",
        },
      }}
    >
      <Stack direction="column">
        {/* Title */}
        <Typography variant="h6">Manage Users</Typography>

        {/* User count */}
        <Typography variant="h3" textAlign="center" marginTop={3}>
          102
        </Typography>

        {/* Statistics */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          marginTop={2}
        >
          <PersonIcon fontSize="large" />
          <Typography>Lorem ipsum</Typography>
        </Stack>
      </Stack>
    </Box>
  );
};
