import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./BestSellingProducts.css"; // Importing the CSS file

const BestSellingProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products?limit=8") // Fetching 8 best-selling products
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error("Error fetching products:", err));
    }, []);

    return (
        <section className="best-selling-section">
            <div className="container">
                <h2 className="section-title">Best Selling Products</h2>
                <div className="products-grid">
                    {products.map((product) => (
                        <div key={product.id} className="product-card">
                            <img src={product.image} alt={product.title} className="product-image" />
                            <h3 className="product-title">{product.title}</h3>
                            <p className="product-price">₹{(product.price * 83).toFixed(2)}</p>
                            <Link to={`/product/${product.id}`} className="view-details-btn">
                                View Details
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BestSellingProducts;
