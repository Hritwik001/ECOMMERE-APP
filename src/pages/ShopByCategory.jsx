import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ShopByCategory.css"; // Import the CSS file

// Import images correctly
import electronicsImg from "../../public/assets/Home_Categories/Electronics_Categories_Home.jpg";
import jewelleryImg from "../../public/assets/Home_Categories/Jewellery_Categories_Home.jpg";
import mensClothingImg from "../../public/assets/Home_Categories/men's_clothing_Categories_Home.jpg";
import womensClothingImg from "../../public/assets/Home_Categories/women's_clothing_Categories_Home.jpg";

// Map category names to their corresponding images
const categoryImages = {
    "electronics": electronicsImg,
    "jewelery": jewelleryImg,
    "men's clothing": mensClothingImg,
    "women's clothing": womensClothingImg,
};

const ShopByCategory = () => {
    const [categories, setCategories] = useState([]);

    // Fetch categories from API
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
            .then((res) => res.json())
            .then((data) => setCategories(data))
            .catch((err) => console.error("Error fetching categories:", err));
    }, []);

    return (
        <section className="shop-category-section">
            <div className="shop-category-container">
                <h2 className="shop-category-title">Shop by Category</h2>
                <div className="shop-category-grid">
                    {categories.map((category, index) => (
                        <Link to={`/category/${category}`} key={index} className="shop-category-card">
                            <img
                                src={categoryImages[category] || "https://via.placeholder.com/250"}
                                alt={category}
                                className="shop-category-image"
                            />
                            <h3 className="shop-category-name">{category}</h3>
                            <button className="shop-now-btn">Shop Now</button>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ShopByCategory;




