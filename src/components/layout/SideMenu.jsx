/*
 * File: SideMenu.jsx
 * Author: Joseph Koh
 * Description: Represents a side nav menu
 */

import { Box, Divider, Typography, Link, Stack } from "@mui/material";
import { categoryLinks } from "../../data/constants";
import { color } from "../../data/constants";
import { FilterProductCategory, SortProductPrice } from "../../utils/Filter";

export const SideMenu = ({
  products,
  setProductList,
  setFilterChip,
  setCurrentPage,
}) => {
  const linkStyle = {
    width: "100%",
    textAlign: "start",
    cursor: "pointer",
    color: color.chocolate,
    textDecoration: "none",
    marginTop: "5px",
    "&:hover": {
      fontWeight: "bold",
    },
  };

  // Function to handle filter product category
  const handleCategoryFilter = (category) => {
    setCurrentPage(1); // Reset page to 1
    setProductList(products); // Reset back to original list
    setProductList((prev) => FilterProductCategory(prev, category));
    setFilterChip("flex");
  };

  // Function to handle filter product price
  const handleSortByFilter = (value) => {
    setCurrentPage(1); // Reset page to 1
    setProductList(products); // Reset back to original list
    setProductList((prev) => SortProductPrice(prev, value));
    setFilterChip("flex");
  };
  return (
    // Side menu
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: "1",
        padding: "8px",
      }}
      //   marginRight={3}
    >
      {/* Category wrapper */}
      <Stack>
        <Typography variant="h5" fontWeight="bold" color={color.chocolate}>
          Categories
        </Typography>
        <Divider />
        {categoryLinks.map((i, index) => (
          <Link
            key={index}
            variant="body1"
            sx={linkStyle}
            onClick={() => handleCategoryFilter(i)}
          >
            {i}
          </Link>
        ))}
      </Stack>

      {/* Sort by price wrapper */}
      <Stack my={4}>
        <Typography variant="h5" fontWeight="bold" color={color.chocolate}>
          Sort By Price
        </Typography>
        <Divider />
        <Link
          variant="body1"
          sx={linkStyle}
          onClick={() => handleSortByFilter("Low to High")}
        >
          Low to High
        </Link>
        <Link
          variant="body1"
          sx={linkStyle}
          onClick={() => handleSortByFilter("High to Low")}
        >
          High to Low
        </Link>
      </Stack>
    </Box>
  );
};
