import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Categories.css";

// Import category images
import electronicsImg from "/assets/Home_Categories/Electronics_Categories_Home.jpg";
import jewelleryImg from "/assets/Home_Categories/Jewellery_Categories_Home.jpg";
import mensClothingImg from "/assets/Home_Categories/men's_clothing_Categories_Home.jpg";
import womensClothingImg from "/assets/Home_Categories/women's_clothing_Categories_Home.jpg";

// Map category names to imported images
const categoryImages = {
    "electronics": electronicsImg,
    "jewelery": jewelleryImg,
    "men's clothing": mensClothingImg,
    "women's clothing": womensClothingImg
};

const CategoryPage = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when the component mounts

        const fetchCategories = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products/categories");
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    if (loading) {
        return (
            <div className="loader-container">
                <div className="loader"></div>
                <p>Loading categories...</p>
            </div>
        );
    }

    return (
        <div className="category-page">
            <h2 className="category-title">Browse Categories</h2>
            <div className="category-grid">
                {categories.map((category, index) => {
                    const normalizedCategory = category.toLowerCase();
                    return (
                        <Link to={`/category/${category}`} key={index} className="category-card">
                            <img
                                src={categoryImages[normalizedCategory] || "https://via.placeholder.com/150"}
                                alt={category}
                                className="category-image"
                            />
                            <h3 className="category-name">{category.toUpperCase()}</h3>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default CategoryPage;


