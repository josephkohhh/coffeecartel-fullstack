/*
 * File: Product.jsx
 * Author: Joseph Koh
 * Description: Represents a product card
 */

import { Stack, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { color } from "../../data/constants";
import { StatusChip } from "../ui/StatusChip";
import { ProductModal } from "./ProductModal";
import { useState } from "react";

export const Product = ({ product }) => {
  // State & functions for handling product modal open/close
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  return (
    <>
      {/* Product card */}
      <Card
        sx={{
          cursor: "pointer",
          borderRadius: "15px",
          "&:hover": { border: "1px solid #DDDDDD", bgcolor: color.cheese },
        }}
        onClick={handleOpenModal}
      >
        {/* Product status */}
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          height="35px"
          marginTop={0.5}
          marginX={0.5}
        >
          {(product.status === "New" || product.status === "Out of Stock") && (
            <StatusChip label={product.status} />
          )}
        </Stack>

        {/* Product Image */}
        <CardMedia
          component="img"
          image={product.image}
          alt={product.name}
          sx={{
            transform: "scale(0.5)",
          }}
        />

        {/* Product info */}
        <CardContent>
          <Typography
            noWrap
            sx={{
              fontSize: { xs: ".85rem", sm: "1.1rem" },
              textAlign: "center",
            }}
          >
            {product.name}
          </Typography>

          {/* Product price */}
          <Typography
            textAlign={"center"}
            sx={{ color: color.grey, fontSize: { xs: ".85rem", sm: "1rem" } }}
          >
            ${product.price}
          </Typography>
        </CardContent>
      </Card>

      {/* Open modal on click */}
      {openModal && (
        <ProductModal
          product={product}
          openModal={openModal}
          handleCloseModal={handleCloseModal}
        />
      )}
    </>
  );
};
