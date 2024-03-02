/*
 * File: ManageOrders.jsx
 * Author: Joseph Koh
 * Description: Represents the manage orders component
 */

import { Box, Stack, Typography } from "@mui/material";
import { color } from "../../data/constants";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";

export const ManageOrders = () => {
  return (
    // Order container
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
          Manage Orders
        </Typography>

        {/* User count */}
        <Typography variant="h3" textAlign="center" marginTop={3}>
          1
        </Typography>

        {/* Statistics */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          marginTop={2}
        >
          <InventoryOutlinedIcon fontSize="large" />
          <Typography>Lorem ipsum</Typography>
        </Stack>
      </Stack>
    </Box>
  );
};
