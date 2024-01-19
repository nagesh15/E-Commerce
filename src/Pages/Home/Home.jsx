import React from "react";
import Navbar from "../../Component/Navbar";
import "../../Styles/Home.css";
import Header from "./Header";
import Category from "../../Component/Category";
import { bagCategory } from "./../../Data/BagCategory";
import OfferImage from "../../Component/OfferImage";
import HorizontailBar from "../../Component/HorizontailBar";
import DealsSection from "./DealsSection";
import { deals } from "./../../Data/Deals";
import ProductSection from "./ProductSection";
import Footer from "./Footer";

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="main">
                <Header />
                <Category bagCategory={bagCategory} />
                <OfferImage />
                <DealsSection deals={deals} />
                <HorizontailBar text={"Featured products"} />
                <ProductSection />
            </div>
            <Footer />
        </>
    );
};

export default Home;
