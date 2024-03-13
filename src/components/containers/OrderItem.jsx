/*
 * File: CartBox.jsx
 * Author: Joseph Koh
 * Description: Represents an order item
 */

import { Stack, Box, Typography, Divider } from "@mui/material";
import { color } from "../../data/constants";

export const OrderItem = ({ i }) => {
  const imageStyle = {
    boxSizing: "border-box",
    objectFit: "cover",
  };
  console.log(i);
  return (
    //* Order item container
    <Stack
      direction="column"
      bgcolor={color.white}
      marginY={2}
      paddingY={2}
      paddingX={3}
      sx={{
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 4px",
        borderRadius: "10px",
      }}
    >
      {/* Status  */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        marginBottom={0.5}
      >
        <Typography variant="h6">Order ID: 12345678</Typography>
        <Typography variant="h6" color={color.green}>
          {i.status}
        </Typography>
      </Stack>

      <Divider />

      {/* Order information */}
      <Stack direction={{ xs: "column", sm: "row" }} paddingY={2} spacing={2}>
        {/* Image */}
        <Box
          sx={{
            width: { xs: "100px", sm: "120px" },
            height: { xs: "100px", sm: "120px" },
            display: "flex",
          }}
        >
          <img
            src={i.image}
            width={"100%"}
            alt="product-image"
            style={imageStyle}
          />
        </Box>

        {/* Order details */}
        <Stack direction="row" flexGrow={1}>
          {/* Name, desc & qty */}
          <Stack direction="column">
            <Typography
              width={{ xs: "100px", sm: "200px", md: "250px" }}
              variant="h6"
              noWrap
            >
              {i.order_item}
            </Typography>
            <Typography variant="body2" color={color.grey}>
              {i.description}
            </Typography>
            <Typography variant="h6">X {i.quantity}</Typography>
          </Stack>

          {/* Price  */}
          <Stack alignItems="flex-end" flexGrow={1}>
            <Typography variant="h6">${i.amount}</Typography>
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
        <Typography variant="h5">${i.total_amount}</Typography>
      </Stack>

      <Stack direction="row" justifyContent="flex-end" marginTop={1}>
        <Typography fontSize="12px" color={color.grey} textAlign="end">
          Delivery attempt should be made in 30mins
        </Typography>
      </Stack>
    </Stack>
  );
};
