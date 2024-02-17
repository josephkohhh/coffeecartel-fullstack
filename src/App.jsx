/*
 * File: App.jsx
 * Author: Joseph Koh
 * Description: Entry point for CoffeeCartel app
 */

import "./App.css";
import FontTheme from "./theme/FontTheme";
import { ThemeProvider } from "@mui/material/styles";
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { Cart } from "./pages/Cart";
import { About } from "./pages/About";
import { CartContextProvider } from "./context/CartContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <CartContextProvider>
      <ThemeProvider theme={FontTheme}>
        <Router>
          <Routes>
            {/* Default route */}
            <Route path="/" element={<Shop />} />
            {/* Respective route */}
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </CartContextProvider>
  );
}

export default App;
