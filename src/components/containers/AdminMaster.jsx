/*
 * File: AdminMaster.jsx
 * Author: Joseph Koh
 * Description: Responsible for managing Admin dashboard
 */

import { Grid, Box } from "@mui/material";
import { color } from "../../data/constants";
import { ManageUsers } from "../ui/ManageUsers";
import { ManageProducts } from "../ui/ManageProducts";
import { ManageOrders } from "../ui/ManageOrders";

export const AdminMaster = () => {
  const gridStyle = {
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 8px",
    borderRadius: "10px",
    backgroundColor: color.dull,
  };
  return (
    <Box
      sx={{
        width: { xs: "80%", md: "70%", lg: "75%" },
        margin: "40px auto",
      }}
    >
      <Grid container justifyContent="space-between" gap={3}>
        <Grid item xs={12} sm={5.5} md={3.5} style={gridStyle}>
          <ManageUsers />
        </Grid>
        <Grid item xs={12} sm={5.5} md={3.5} style={gridStyle}>
          <ManageProducts />
        </Grid>
        <Grid item xs={12} sm={5.5} md={3.5} style={gridStyle}>
          <ManageOrders />
        </Grid>
      </Grid>
    </Box>
  );
};
