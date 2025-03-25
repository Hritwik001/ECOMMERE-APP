import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "./Context/CartContext";
import { WishlistContext } from "./Context/WishListContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ProductDetails.css";

const featuredProducts = [
    { id: "101", title: "Wireless Headphones", priceUSD: 30, description: "High-quality wireless headphones.", image: "/assets/Featured_Products/headphones.jpg" },
    { id: "102", title: "Smartwatch", priceUSD: 50, description: "Feature-packed smartwatch.", image: "/assets/Featured_Products/smartwatch.jpg" },
    { id: "103", title: "Bluetooth Speaker", priceUSD: 25, description: "Portable Bluetooth speaker.", image: "/assets/Featured_Products/speaker.jpg" },
];

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useContext(CartContext);
    const { addToWishlist } = useContext(WishlistContext);
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);

        const fetchProduct = async () => {
            setLoading(true);

            const featuredProduct = featuredProducts.find(p => p.id === id);
            if (featuredProduct) {
                setProduct({
                    ...featuredProduct,
                    price: (featuredProduct.priceUSD * 83).toFixed(2)  // Convert USD to INR
                });
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                const data = await response.json();
                setProduct({
                    ...data,
                    price: (data.price * 83).toFixed(2)  // Convert price to INR
                });
            } catch (error) {
                console.error("Error fetching product:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const handleAddToCart = () => {
        addToCart(product);
        toast.success("🛒 Product added to cart!", {
            position: "top-right",
            autoClose: 2000,
            theme: "dark"
        });
        setTimeout(() => navigate("/cart"), 1000);
    };

    const handleBuyNow = () => {
        addToCart(product);
        navigate("/checkout");
    };

    const handleAddToWishlist = () => {
        addToWishlist(product);
        toast.success("❤️ Product added to wishlist!", {
            position: "top-right",
            autoClose: 2000,
            theme: "dark"
        });
        setTimeout(() => navigate("/wishlist"), 1000);
    };

    if (loading) {
        return (
            <div className="loader-container">
                <div className="loader"></div>
                <p>Loading product details...</p>
            </div>
        );
    }

    return (
        <div className="product-details">
            <div className="product-container">
                <div className="product-image-container">
                    <img src={product.image} alt={product.title} className="product-image" />
                </div>
                <div className="product-info">
                    <h2 className="product-name">{product.title}</h2>
                    <p className="product-price">₹{product.price}</p>
                    <p className="product-description">{product.description}</p>
                    <div className="product-actions">
                        <button className="buy-now-btn" onClick={handleBuyNow}>Buy Now</button>
                        <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
                        <button className="add-to-wishlist-btn" onClick={handleAddToWishlist}>💖 Add to Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;












