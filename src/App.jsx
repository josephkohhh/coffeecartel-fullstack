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
import { Forbidden } from "./pages/Forbidden";
import { AdminRoute } from "./utils/AdminRoute";
import { UserRoute } from "./utils/UserRoute";
import { PublicRoute } from "./utils/PublicRoute";
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
              {/* Forbidden route */}
              <Route path="/forbidden" element={<Forbidden />} />

              {/* Public route */}
              <Route element={<PublicRoute />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Route>

              {/* Public and user route */}
              <Route element={<UserRoute />}>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/about" element={<About />} />
                <Route path="/cart" element={<Cart />} />
              </Route>

              {/* Admin Route */}
              <Route element={<AdminRoute />}>
                <Route path="/admin" element={<Admin />} />
              </Route>
            </Routes>
          </Router>
        </ThemeProvider>
      </CartContextProvider>
    </UserContextProvider>
  );
}

export default App;
