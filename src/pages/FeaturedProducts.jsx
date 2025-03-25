import React from "react";
import { Link } from "react-router-dom";
import "./FeaturedProducts.css";

const products = [
    { id: 101, name: "Wireless Headphones", priceUSD: 30, image: "/assets/Featured_Products/headphones.jpg" },
    { id: 102, name: "Smartwatch", priceUSD: 50, image: "/assets/Featured_Products/smartwatch.jpg" },
    { id: 103, name: "Bluetooth Speaker", priceUSD: 25, image: "/assets/Featured_Products/speaker.jpg" },
];

const FeaturedProducts = () => {
    return (
        <section className="featured-products">
            <h2>Featured Products</h2>
            <div className="product-list">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-price">₹{(product.priceUSD * 83).toFixed(2)}</p>
                        <Link to={`/product/${product.id}`} className="view-product-btn">
                            View Product
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedProducts;





