/*
 * File: Filter.js
 * Author: Joseph Koh
 * Description: Contains helper functions for filtering/sorting products
 */

// Function to filter product by category
export const FilterProductCategory = (list, category) => {
  return list.filter((i) => i.category === category);
};

// Function to sort product by price
export const SortProductPrice = (list, sortBy) => {
  if (sortBy === "Low to High") {
    // Sort by asc order
    return list.slice().sort((a, b) => a.price - b.price);
  }
  // Sort by desc order
  else return list.slice().sort((a, b) => b.price - a.price);
};

// Function to search products
export const SearchProduct = (list, query) => {
  return list.filter((i) =>
    i.name.trim().toLowerCase().includes(query.trim().toLowerCase())
  );
};
