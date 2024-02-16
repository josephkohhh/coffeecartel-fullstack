/*
 * File: CalculateOrder.js
 * Author: Joseph Koh
 * Description: Contains helper function for calculating order
 */

// Function to calculate sub total of a list
export const CalculateSubTotal = (list) => {
  const subTotal = list.reduce((acc, i) => {
    const productCost = i.price * i.qty;
    return acc + productCost;
  }, 0); // <- Ensure to provide initial value for accumulator (0 in this case)

  return subTotal;
};
