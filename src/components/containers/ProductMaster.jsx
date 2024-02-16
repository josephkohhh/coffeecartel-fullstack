/*
 * File: ProductMaster.jsx
 * Author: Joseph Koh
 * Description: Responsible for managing product display
 */

import { Search } from "../form/Search";
import { Box, Stack } from "@mui/material";
import { SideMenu } from "../layout/SideMenu";
import { FilterButtonDrawer } from "../layout/FilterButtonDrawer";
import { FilterChip } from "../ui/FilterChip";
import { ProductList } from "./ProductList";
import { useState } from "react";
import { products } from "../../data/products";

export const ProductMaster = () => {
  // State to retrieve productList
  const [productList, setProductList] = useState(products);

  // State and function to handle filter chip display
  const [filterChip, setFilterChip] = useState("none");
  const RemoveFilterChip = () => {
    setFilterChip("none");
    setProductList(products);
  };

  // State to manage current page
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      {/* Search form */}
      <Search
        products={products}
        setProductList={setProductList}
        setCurrentPage={setCurrentPage}
      />

      <Box
        sx={{
          width: { xs: "80%", lg: "70%" },
          display: "flex",
          margin: "auto",
          padding: "8px",
        }}
      >
        {/* Side nav menu container (non-mobile) */}
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            width: "250px",
            height: "100%",
            top: "0",
            position: "-webkit-sticky",
            position: "sticky",
            marginRight: "24px",
          }}
        >
          <SideMenu
            products={products}
            setProductList={setProductList}
            setFilterChip={setFilterChip}
            setCurrentPage={setCurrentPage}
          />
        </Box>

        {/* Product display container */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Filter button drawer container (mobile) */}
          <Stack
            direction="row"
            display={{ xs: "flex", sm: "none" }}
            marginBottom={1.5}
          >
            <FilterButtonDrawer
              products={products}
              setProductList={setProductList}
              setFilterChip={setFilterChip}
              setCurrentPage={setCurrentPage}
            />
          </Stack>

          {/* Filter chip container */}
          <Stack direction="row" display={filterChip} marginBottom={1.5}>
            <FilterChip onDelete={RemoveFilterChip} />
          </Stack>

          {/* Product display container */}
          <Stack direction="row" marginTop={1.5}>
            <ProductList
              productList={productList}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </Stack>
        </Box>
      </Box>
    </>
  );
};
