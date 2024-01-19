import React, { useMemo } from "react";
import SuggestionCard from "../../Component/SuggestionCard";
import { ProductsData } from "../../Data/ProductsData";

const SuggestionList = () => {
    const suggestionProduct = useMemo(
        () => ProductsData.slice(0, 4),
        [ProductsData]
    );
    return (
        <div className="suggestion-list">
            {suggestionProduct.map((product, index) => {
                return <SuggestionCard key={index} product={product} />;
            })}
        </div>
    );
};

export default SuggestionList;
