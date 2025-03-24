import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "./pages/Context/CartContext.jsx";
import { WishlistProvider } from "./pages/Context/WishListContext.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>

    <CartProvider>
      <WishlistProvider>
        <App />
      </WishlistProvider>
    </CartProvider>

  </StrictMode>
);
