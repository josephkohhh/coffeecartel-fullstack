/*
 * File: FilterButtonDrawer.jsx
 * Author: Joseph Koh
 * Description: Represents a filter button and side drawer anchored to left
 */

import { Drawer, Box } from "@mui/material";
import { CloseButton } from "../ui/CloseButton";
import { FilterButton } from "../ui/FilterButton";
import { SideMenu } from "./SideMenu";
import { useState } from "react";
import { UseWindowResize } from "../../hooks/UseWindowResize";

export const FilterButtonDrawer = ({
  products,
  setProductList,
  setFilterChip,
  setCurrentPage,
}) => {
  // State & functions for handling drawer open/close
  const [drawer, setDrawer] = useState(false);
  const openDrawer = () => setDrawer(true);
  const closeDrawer = () => setDrawer(false);

  // Function to close drawer upon window resize
  UseWindowResize(closeDrawer);

  return (
    <>
      {/* Filter button */}
      <FilterButton onClick={openDrawer} />

      {/* Filter drawer */}
      <Drawer anchor="left" open={drawer} onClose={closeDrawer}>
        <Box
          sx={{
            width: "230px",
            display: "flex",
            flexDirection: "column",
            padding: "8px",
          }}
          onClick={closeDrawer}
        >
          <CloseButton onClick={closeDrawer} />
          <SideMenu
            products={products}
            setProductList={setProductList}
            setFilterChip={setFilterChip}
            setCurrentPage={setCurrentPage}
          />
        </Box>
      </Drawer>
    </>
  );
};
