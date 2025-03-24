import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast styles
import Wishlist from "./pages/Wishlist";

import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import ProductListing from "./pages/ProductListing";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import "./App.css";


function App() {
  return (
    <Router>
      <Navbar />
      <ToastContainer position="top-right" autoClose={2000} theme="dark" />
      <div className="content-wrapper">
        <Routes>
          {/* Protected Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/category/:categoryName" element={<ProductListing />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />

          {/* Public Routes */}


          {/* Catch-all for undefined routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router >
  );
}

export default App;


