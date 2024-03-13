/*
 * File: CartBox.jsx
 * Author: Joseph Koh
 * Description: Represents an order item
 */

import { Stack, Box, Typography, Divider } from "@mui/material";
import { color } from "../../data/constants";
import productImage from "../../../public/products/Americano.png";

export const OrderItem = () => {
  const imageStyle = {
    boxSizing: "border-box",
    objectFit: "cover",
  };
  return (
    //* Order item container
    <Stack
      direction="column"
      bgcolor={color.white}
      marginY={2}
      padding={2}
      sx={{
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 4px",
        borderRadius: "10px",
      }}
    >
      {/* Status  */}
      <Stack direction="row" justifyContent="flex-end">
        <Typography variant="h6" color={color.green} marginBottom={0.5}>
          Processing
        </Typography>
      </Stack>

      <Divider />

      {/* Order information */}
      <Stack direction={{ xs: "column", sm: "row" }} paddingY={2} spacing={2}>
        {/* Image */}
        <Box
          sx={{
            height: { xs: "100px", sm: "120px" },
            display: "flex",
          }}
        >
          <img
            src={productImage}
            width={"100px"}
            alt="product-image"
            style={imageStyle}
          />
        </Box>

        {/* Order details */}
        <Stack direction="row" flexGrow={1}>
          {/* Name, desc & qty */}
          <Stack direction="column">
            <Typography variant="h6" noWrap>
              Americano
            </Typography>
            <Typography variant="body2" color={color.grey}>
              Lorem ipsum
            </Typography>
            <Typography variant="h6">X 2</Typography>
          </Stack>

          {/* Price  */}
          <Stack alignItems="flex-end" flexGrow={1}>
            <Typography variant="h6">$7.00</Typography>
          </Stack>
        </Stack>
      </Stack>
      {/* Total amount */}
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        spacing={1}
      >
        <Typography variant="body1">Order Total: </Typography>
        <Typography variant="h5">$30.00</Typography>
      </Stack>

      <Stack direction="row" justifyContent="flex-end" marginTop={1}>
        <Typography fontSize="12px" color={color.grey} textAlign="end">
          Delivery attempt should be made in 30mins
        </Typography>
      </Stack>
    </Stack>
  );
};
