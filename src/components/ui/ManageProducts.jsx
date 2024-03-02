/*
 * File: ManageUsers.jsx
 * Author: Joseph Koh
 * Description: Represents the manage products component
 */

import { Box, Stack, Typography } from "@mui/material";
import { color } from "../../data/constants";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";

export const ManageProducts = () => {
  return (
    // Product container
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
        <Typography variant="h6" noWrap>
          Manage Products
        </Typography>

        {/* User count */}
        <Typography variant="h3" textAlign="center" marginTop={3}>
          23
        </Typography>

        {/* Statistics */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          marginTop={2}
        >
          <Inventory2OutlinedIcon fontSize="large" />
          <Typography>Lorem ipsum</Typography>
        </Stack>
      </Stack>
    </Box>
  );
};
