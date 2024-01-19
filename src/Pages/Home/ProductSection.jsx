import React from "react";
import ProductCard from "../../Component/ProductCard";
import { ProductsData } from "../../Data/ProductsData";

const ProductSection = () => {
    return (
        <div className="products-container">
            {ProductsData.map((product, index) => {
                return <ProductCard key={index} product={product} />;
            })}
        </div>
    );
};

export default ProductSection;
