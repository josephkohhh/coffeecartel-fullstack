/*
 * File: CartMaster.jsx
 * Author: Joseph Koh
 * Description: Responsible for managing cart display
 */

import { Grid, Box } from "@mui/material";
import { color } from "../../data/constants";
import { CartList } from "./CartList";
import { CartTotal } from "./CartTotal";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartMaster = () => {
  const gridStyle = {
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 8px",
    borderRadius: "15px",
    bgcolor: color.white,
  };

  // Consume CartContext
  const { cartList, ClearCart, DeleteCartItem, UpdateCartItemQuantity } =
    useContext(CartContext);

  // State to retrieve cartList
  // const [initCartList, setInitCartList] = useState(cartList) || [];
  return (
    // CartMaster
    <Box
      sx={{
        width: { xs: "90%", md: "70%", lg: "60%" },
        margin: "40px auto",
      }}
    >
      <Grid container justifyContent={"space-between"} rowGap={3}>
        {/* CartList box */}
        <Grid item xs={12} md={7} style={gridStyle}>
          <CartList
            cartList={cartList}
            ClearCart={ClearCart}
            DeleteCartItem={DeleteCartItem}
            UpdateCartItemQuantity={UpdateCartItemQuantity}
          />
        </Grid>

        {/* CartTotal box */}
        <Grid item xs={12} md={4.5} style={gridStyle} height={"350px"}>
          <CartTotal cartList={cartList} />
        </Grid>
      </Grid>
    </Box>
  );
};
