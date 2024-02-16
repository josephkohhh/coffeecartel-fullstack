/*
 * File: App.jsx
 * Author: Joseph Koh
 * Description: Entry point for CoffeeCartel app
 */

import "./App.css";
import FontTheme from "./theme/FontTheme";
import { ThemeProvider } from "@mui/material/styles";
import { Shop } from "./pages/Shop";
import { Cart } from "./pages/Cart";
import { CartContextProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <CartContextProvider>
        <ThemeProvider theme={FontTheme}>
          <Shop />
          <Cart />
        </ThemeProvider>
      </CartContextProvider>
    </>
  );
}

export default App;
