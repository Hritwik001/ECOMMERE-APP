import React, { useContext } from "react";
import { WishlistContext } from "./Context/WishListContext";
import { useNavigate } from "react-router-dom";
import "./Wishlist.css"; // Create this CSS file

const Wishlist = () => {
    const { wishlist, removeFromWishlist } = useContext(WishlistContext);
    const navigate = useNavigate();

    return (
        <div className="wishlist-container">
            <h2>❤️ My Wishlist</h2>
            {wishlist.length === 0 ? (
                <p>Your wishlist is empty.</p>
            ) : (
                <div className="wishlist-items">
                    {wishlist.map((product) => (
                        <div key={product.id} className="wishlist-item">
                            <img src={product.image} alt={product.title} className="wishlist-image" />
                            <div className="wishlist-info">
                                <h3>{product.title}</h3>
                                <p>₹{product.price}</p>
                                <button className="remove-btn" onClick={() => removeFromWishlist(product.id)}>❌ Remove</button>
                                <button className="view-btn" onClick={() => navigate(`/product/${product.id}`)}>🔍 View</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Wishlist;

