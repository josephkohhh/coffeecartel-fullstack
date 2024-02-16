/*
 * File: ProductModal.jsx
 * Author: Joseph Koh
 * Description: Represents a product modal
 */

import { Modal, Box, Stack, Typography, Button } from "@mui/material";
import { color } from "../../data/constants";
import { CategoryButton } from "../ui/CategoryButton";
import { CloseButton } from "../ui/CloseButton";
import { StatusChip } from "../ui/StatusChip";
import { AddToCartButton } from "../ui/AddToCartButton";
import { UseWindowResize } from "../../hooks/UseWindowResize";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const ProductModal = ({ product, openModal, handleCloseModal }) => {
  const modalStyle = {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: color.white,
    border: "1px solid grey",
    borderRadius: "15px",
    padding: 1,
  };
  // Disable add to cart button if product is labelled "Out of Stock"
  const disabled = product.status === "Out of Stock";

  // Consume CartContext
  const { AddToCartList } = useContext(CartContext);

  // Function to handle cart submission
  const handleAddToCart = () => {
    AddToCartList(product);
    handleCloseModal();
  };

  // Function to close modal upon window resize
  UseWindowResize(handleCloseModal);
  return (
    // Product Modal
    <Modal open={openModal} onClose={handleCloseModal} disableAutoFocus>
      {/* Modal wrapper */}
      <Box width={{ xs: "250px", sm: "400px" }} sx={modalStyle}>
        {/* Close button */}
        <Stack direction="row" justifyContent="space-between" marginBottom={1}>
          <CategoryButton>{product.category}</CategoryButton>
          <CloseButton onClick={handleCloseModal} />
        </Stack>

        {/* Product image */}
        <img
          src={product.image}
          alt={product.image}
          style={{
            width: "200px",
            margin: "auto",
          }}
        ></img>

        {/* Product info wrapper */}
        <Box paddingX={2} marginTop={2}>
          {(product.status === "New" || product.status === "Out of Stock") && (
            <StatusChip label={product.status} />
          )}
          {/* Title & price  */}
          <Stack direction="row" justifyContent="space-between" spacing={1}>
            <Typography variant="h6" color={color.chocolate}>
              {product.name}
            </Typography>
            <Typography variant="h6">${product.price}</Typography>
          </Stack>

          {/* Desc */}
          <Typography
            variant="body1"
            sx={{
              marginTop: 0.5,
              marginBottom: 2,
              textAlign: "start",
              color: color.grey,
            }}
          >
            {product.desc}
          </Typography>

          {/* Add to cart button */}
          <Stack
            direction="column"
            justifyContent="flex-end"
            marginTop={1}
            marginBottom={2}
          >
            <AddToCartButton disabled={disabled} onClick={handleAddToCart}>
              Add To Cart
            </AddToCartButton>
          </Stack>
        </Box>
      </Box>
    </Modal>
  );
};
