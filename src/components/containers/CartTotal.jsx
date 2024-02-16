/*
 * File: CartMaster.jsx
 * Author: Joseph Koh
 * Description: Represents displaying of total cart price
 */

import { Typography, Stack, Box, Divider } from "@mui/material";
import { CheckOutButton } from "../ui/CheckOutButton";
import { color } from "../../data/constants";
import { CalculateSubTotal } from "../../utils/CalculateOrder";
import { useEffect, useState } from "react";
import { Overlay } from "../ui/Overlay";
import { SuccessModal } from "../ui/SuccessModal";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartTotal = ({ cartList }) => {
  // State and function to manage subTotal when cartList changes
  const [subTotal, setSubTotal] = useState(0);
  useEffect(() => {
    const newSubTotal = CalculateSubTotal(cartList);
    setSubTotal(newSubTotal);
  }, [cartList]);

  // Amount
  const gstAmount = 0.09 * subTotal;

  // Consume CartContext
  const { ClearCart } = useContext(CartContext);

  // State and functions to handle is ordering
  const [isOrdering, setIsOrdering] = useState(false);
  const HandleOrdering = (callback) => {
    setIsOrdering(true);

    // Simulate an order process with setTimeout of 3s
    setTimeout(() => {
      setIsOrdering(false);
      ClearCart();

      callback();
    }, 3000);
  };

  // State to manage success modal open/close
  const [successModal, setSuccessModal] = useState(false);
  const openSuccessModal = () => setSuccessModal(true);
  const closeSuccessModal = () => setSuccessModal(false);

  return (
    <>
      {/* CartTotal */}
      <Box padding={3}>
        <Typography variant="h5" marginBottom={0.5}>
          Total
        </Typography>

        <Divider />

        {/* CartTotal info container */}
        <Stack direction="column">
          {/* Subtotal */}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="end"
            marginTop={2}
          >
            <Typography variant="body1">Subtotal</Typography>
            <Typography variant="body1">${subTotal.toFixed(2)}</Typography>
          </Stack>

          {/* Delivery charge */}
          <Stack direction="row" justifyContent="space-between" mt={2}>
            <Typography variant="body1">Delivery</Typography>
            <Typography variant="body1" color={color.green}>
              FREE
            </Typography>
          </Stack>

          {/* GST charge */}
          <Stack direction="row" justifyContent="space-between" my={2}>
            <Typography variant="body1">GST (9%)</Typography>
            <Typography variant="body1">${gstAmount.toFixed(2)}</Typography>
          </Stack>
        </Stack>
        <Divider />

        {/* Total price */}
        <Stack direction="row" justifyContent="space-between" my={2}>
          <Typography variant="body1">Total</Typography>
          <Typography variant="body1">
            ${(subTotal + gstAmount).toFixed(2)}
          </Typography>
        </Stack>

        {/* Check out button */}
        <Stack direction="row" justifyContent="center" marginTop={3}>
          <CheckOutButton
            onClick={() => HandleOrdering(openSuccessModal)}
            disabled={cartList.length === 0}
            loading={isOrdering}
          >
            Go To Checkout
          </CheckOutButton>
        </Stack>
      </Box>

      {/* If true render overlay */}
      {isOrdering && <Overlay />}

      {/* If true render success modal */}
      {successModal && (
        <SuccessModal
          successModal={successModal}
          closeSuccessModal={closeSuccessModal}
        />
      )}
    </>
  );
};
