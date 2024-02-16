/*
 * File: OrderTable.jsx
 * Author: Joseph Koh
 * Description: Represents a table of orders
 */

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

export const OrderTable = ({ cartList, subTotal }) => {
  return (
    // Table
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Subtotal</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartList.map((cartItem) => (
            <TableRow key={cartItem.id}>
              <TableCell>{cartItem.name}</TableCell>
              <TableCell align="right">{cartItem.qty}</TableCell>
              <TableCell align="right">{cartItem.price}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={2} align="right">
              <strong>Total Price (incl. GST):</strong>
            </TableCell>
            <TableCell align="right">
              <strong>${(subTotal + subTotal * 0.09).toFixed(2)}</strong>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
