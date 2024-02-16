/*
 * File: ProductList.jsx
 * Author: Joseph Koh
 * Description: Responsible for managing product list
 */

import { Grid, Pagination } from "@mui/material";
import { EmptyList } from "../ui/EmptyList";
import { Product } from "./Product";

export const ProductList = ({ productList, currentPage, setCurrentPage }) => {
  const pageSize = 12; // Number of products per page

  // Function to manage page change
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * pageSize; // First item to be included on current page
  const endIndex = startIndex + pageSize; // Last item to be included on current page
  const currentProducts = productList.slice(startIndex, endIndex); // Extract a portion of productList

  return (
    <>
      <Grid container spacing={3}>
        {/* Product item display */}
        {currentProducts.length !== 0 ? (
          currentProducts.map((product) => (
            <Grid item key={product.id} xs={6} sm={6} md={4} lg={3}>
              <Product product={product} />
            </Grid>
          ))
        ) : (
          // Empty list
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <EmptyList />
          </Grid>
        )}

        {/* Pagination */}
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Pagination
            count={Math.ceil(productList.length / pageSize)} // Total no. of pages
            page={currentPage}
            onChange={handlePageChange}
            variant="outlined"
            color="primary"
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};
