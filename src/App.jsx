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
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Admin } from "./pages/Admin";
import { PrivateRoute } from "./utils/PrivateRoute";
import { CartContextProvider } from "./context/CartContext";
import { UserContextProvider } from "./context/UserContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <UserContextProvider>
      <CartContextProvider>
        <ThemeProvider theme={FontTheme}>
          <Router>
            <Routes>
              {/* Default route */}
              <Route path="/" element={<Shop />} />

              {/* Respective route */}
              <Route path="/home" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              {/* Private Route */}
              <Route element={<PrivateRoute />}>
                <Route path="/admin" element={<Admin />} />
                <Route path="/cart" element={<Cart />} />
              </Route>
            </Routes>
          </Router>
        </ThemeProvider>
      </CartContextProvider>
    </UserContextProvider>
  );
}

export default App;
