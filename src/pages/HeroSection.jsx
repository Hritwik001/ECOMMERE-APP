import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Ensure correct path

const images = [
    "/assets/Hero_Section/product1.jpg",
    "/assets/Hero_Section/product2.jpg",
    "/assets/Hero_Section/product3.jpg"
];

const HeroSection = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero">
            {/* Background Images Rotating */}
            <div className="hero-bg-container">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`hero-bg ${index === currentImage ? "active" : ""}`}
                        style={{ backgroundImage: `url(${img})` }}
                    ></div>
                ))}
            </div>

            {/* Dark Overlay for Text Clarity */}
            <div className="hero-overlay"></div>

            {/* Content */}
            <div className="hero-content">
                <h1 className="hero-title">Discover the Best Products</h1>
                <p className="hero-subtitle">Shop the latest trends with premium quality.</p>
                <Link to="/categories" className="hero-btn">Shop Now</Link>
            </div>
        </section>
    );
};

export default HeroSection;



