import React, { createContext, useState, useEffect } from "react";

// Create Wishlist Context
export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState(() => {
        const storedWishlist = localStorage.getItem("wishlist");
        return storedWishlist ? JSON.parse(storedWishlist) : [];
    });

    // Save wishlist to local storage
    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [wishlist]);

    // Add to wishlist
    const addToWishlist = (product) => {
        setWishlist((prevWishlist) => [...prevWishlist, product]);
    };

    // Remove from wishlist
    const removeFromWishlist = (productId) => {
        setWishlist((prevWishlist) => prevWishlist.filter(item => item.id !== productId));
    };

    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};
