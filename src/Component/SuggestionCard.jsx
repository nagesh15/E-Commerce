import React from "react";
import { BiUser, BiHeart } from "react-icons/bi";

const SuggestionCard = ({ product }) => {
    return (
        <div className="suggestion-card">
            <h4>{product.title}</h4>
            <div className="flex">
                <h4>${product.price}</h4>
                <div>
                    {product.colors.map((color, index) => {
                        return (
                            <div
                                key={index}
                                className="color-dot"
                                style={{ backgroundColor: color }}
                            ></div>
                        );
                    })}
                </div>
            </div>
            <div className="image-section">
                <img src={product.image} alt="" />
                <span className="whishlist-icon">
                    <BiHeart />
                </span>
            </div>
        </div>
    );
};

export default SuggestionCard;
