/**
 * File: constants.js
 * Author: Joseph Koh
 * Description: To store fixed data
 */

export const color = {
  white: "#FFF",
  dull: "#FAFAFA",
  black: "#000",
  green: "#04A96D",
  darkgreen: "#07784f",
  red: "#DC143C",
  grey: "#555555",
  lightGrey: "#DDDDDD",
  cheese: "#FBF8F5",
  lightChocolate: "#634832",
  chocolate: "#38220F",
};
export const navLinks = [
  { label: "Home", path: "/home" },
  { label: "Shop", path: "/shop" },
  { label: "About", path: "/about" },
];
export const footerLinks = [
  {
    label: "Code",
    path: "https://github.com/josephkohhh/coffeecartel-frontend.git",
  },
  { label: "Home", path: "/home" },
  { label: "About", path: "/about" },
];
export const categoryLinks = [
  "Hot Coffees",
  "Iced Coffees",
  "Tea Lattes",
  "Espresso",
  "Frappuccinos",
  "Cold Brews",
  "Refreshers",
  "Coffee Beans",
  "Seasonal Specialty",
];

// Data stored in app features table
export const tableData = [
  {
    feature: "Navbar",
    description: "Top app bar to navigate around",
  },
  {
    feature: "Search",
    description: "Search for products",
  },
  {
    feature: "Side Menu",
    description: "Filter products categorically",
  },
  {
    feature: "Pagination",
    description: "Limit up to 12 products per page",
  },
  {
    feature: "Cart",
    description: "Add, update, delete, clear products from cart",
  },
  {
    feature: "Local Storage",
    description: "Products saved is updated to local storage",
  },
  {
    feature: "Footer",
    description: "Bottom app bar to navigate around",
  },
  {
    feature: "Responsiveness",
    description: "App is responsive which supports mobile devices",
  },
];

// Code snippets stored in variables
export const routerCodeSnippet = `<Router>
 <Routes>
  <Route index element={<Home />} />
  {/* Home route */}
  <Route path="/Home" element={<Home />} />
  {/* About route */}
  <Route path="/About" element={<About />} />
 </Routes>
</Router>`;
export const useStateCodeSnippet = `const [anchorEl, setAnchorEl] = useState(null);
const handleOpenMenu = (event) => setAnchorEl(event.currentTarget);
const handleCloseMenu = () => setAnchorEl(null);`;
export const useEffectCodeSnippet = `export const UseWindowResize = (...callbacks) => {
 useEffect(() => {
  const handleResize = () => callbacks.forEach((callback) => callback());
  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize); 
 }, []);
};`;
export const useCustomHookCodeSnippet = `const {
  cartList,
  setCartList,
  AddToCartList,
  ClearCart,
  DeleteCartItem,
  UpdateCartItemQuantity,
} = useCartState();
`;
export const useLocalStorageCodeSnippet = `// Get
export const getFromLocalStorage = (key) =>
  JSON.parse(localStorage.getItem(key));

// Set
export const saveToLocalStorage = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

// Delete
export const clearFromLocalStorage = (key) => localStorage.removeItem(key);`;
export const contextAPICodeSnippet = `export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  
  // State and functions code logic here...
  ...

  return (
    <CartContext.Provider
      value={{
        ...
      }}
    >
      {children}
    </CartContext.Provider>
  );
};`;
export const axiosCodeSnippet = ``;
export const envVarCodeSnippet = ``;
export const arrayMapCodeSnippet = `currentProducts.map((product) => (
  <Grid item key={product.id}>
    <Product product={product} />
  </Grid>`;
export const arrayFilterSliceSortCodeSnippet = `// Function to filter product by category
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
};`;
export const arraySomeCodeSnippet = `const existingItem = prev.some((i) => i.id === cartItem.id);`;
export const arrayReduceCodeSnippet = `list.reduce((acc, i) => {
  const productCost = i.price * i.qty;
  return acc + productCost;
}, 0);`;
export const viteCodeSnippet = `npx create-vite project_name --template react`;
export const viteDevCodeSnippet = `npm run dev`;
export const viteProdCodeSnippet = `npm run build`;
export const muiCodeSnippet = `npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material`;
