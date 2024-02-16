/*
 * File: Search.jsx
 * Author: Joseph Koh
 * Description: Responsible for searching products
 */

import { Stack, InputAdornment } from "@mui/material";
import { TextInput } from "../ui/TextInput";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { SearchProduct } from "../../utils/Filter";

export const Search = ({ products, setProductList, setCurrentPage }) => {
  const [query, setQuery] = useState("");

  // Function to handle search onChange
  const HandleSearch = (event) => {
    setCurrentPage(1);
    setQuery(event.target.value);
    setProductList(products); // Reset back to original list
    setProductList((prev) => SearchProduct(prev, query));
  };

  // Function to handle submit search
  const SubmitSearch = (event) => {
    setCurrentPage(1);
    event.preventDefault();
    setProductList(products); // Reset back to original list
    setProductList((prev) => SearchProduct(prev, query));
    setQuery(""); // Reset query
  };
  return (
    <form onSubmit={SubmitSearch}>
      {/* Search text field */}
      <Stack direction="row" justifyContent="center" marginBottom={2}>
        <TextInput
          placeholder="Coffee hunt here!"
          value={query}
          onChange={HandleSearch}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </form>
  );
};
