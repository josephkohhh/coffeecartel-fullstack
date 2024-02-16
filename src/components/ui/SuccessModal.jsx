/*
 * File: SuccessModal.jsx
 * Author: Joseph Koh
 * Description: Represents a success order
 */

import { Modal, Box, Stack, Typography } from "@mui/material";
import { color } from "../../data/constants";
import { CloseButton } from "./CloseButton";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export const SuccessModal = ({ successModal, closeSuccessModal }) => {
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
    padding: 1.5,
  };
  return (
    <>
      {/* Checkout modal */}
      <Modal open={successModal} onClose={closeSuccessModal} disableAutoFocus>
        {/* Modal wrapper */}
        <Box width={{ xs: "75%", sm: "450px" }} sx={modalStyle}>
          {/* Close button */}
          <CloseButton
            onClick={() => {
              closeSuccessModal();
            }}
          />

          {/* Order Success */}
          <Stack direction="column" alignItems="center" marginBottom={3}>
            <CheckCircleOutlineIcon
              sx={{ color: color.green, fontSize: "80px" }}
            />
            <Typography variant="h6" color={color.green}>
              Order Confirmed
            </Typography>
            <Typography variant="body1" color={color.grey}>
              Your Order ID: 12345678
            </Typography>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};
