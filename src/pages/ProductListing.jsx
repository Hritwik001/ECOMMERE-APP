import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./ProductListing.css";

const ProductListing = () => {
    const { categoryName } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/category/${categoryName}`);
                const data = await response.json();
                setProducts(data.map(product => ({
                    ...product,
                    price: (product.price * 83).toFixed(2)  // Convert price to INR
                })));
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        if (categoryName) {
            fetchProducts();
        }
    }, [categoryName]);

    if (loading) {
        return (
            <div className="loader-container">
                <div className="loader"></div>
                <p>Loading products...</p>
            </div>
        );
    }

    return (
        <div className="product-listing-page">
            <h2 className="product-category-title">
                {categoryName ? categoryName.toUpperCase() : "Products"}
            </h2>
            <div className="product-grid">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product.id} className="product-card">
                            <img src={product.image} alt={product.title} className="product-image" />
                            <h3 className="product-name">{product.title}</h3>
                            <p className="product-price">₹{product.price}</p>
                            <Link to={`/product/${product.id}`} className="view-details-btn">
                                View Details
                            </Link>
                        </div>
                    ))
                ) : (
                    <p className="no-products">No products found in this category.</p>
                )}
            </div>
        </div>
    );
};

export default ProductListing;


