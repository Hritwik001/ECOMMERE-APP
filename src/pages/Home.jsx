import React from "react";
import HeroSection from "./HeroSection";
import FeaturedProducts from "./FeaturedProducts";
import ShopByCategory from "./ShopByCategory";
import BestSellingProducts from "./BestSellingProducts";


const Home = () => {
    return (
        <div>
            <HeroSection />
            <FeaturedProducts />
            <ShopByCategory />
            <BestSellingProducts />

        </div>
    );
};

export default Home;




