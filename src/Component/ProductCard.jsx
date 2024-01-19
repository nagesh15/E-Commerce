import React from "react";
import useCart from "../hooks/useCart";

const ProductCard = ({ product }) => {
    const { cart, setCart } = useCart();

    const handleAddToCart = (product) => {
        if (cart.filter((cart) => cart.id === product.id).length > 0) {
            return alert("already exists");
        }
        product.qty = 1;
        setCart((prevCartItems) => {
            return [...prevCartItems, product];
        });
    };

    return (
        <div className="product-card" key={product.id}>
            <div className="image-section">
                <img src={product.image} alt="bag" />
                <div className="left-ribbon">{product.tag}</div>
                {product.additionalTag && (
                    <div className="right-ribbon">{product.additionalTag}</div>
                )}
            </div>
            <div className="product-details">
                <p className="product-title pink-color">{product.title}</p>
                <p className="product-info">{product.info}</p>
                <p className="product-price">
                    <span
                        style={{
                            color: product.originalPrice
                                ? "rgb(253, 86, 114)"
                                : "",
                            fontSize: product.originalPrice ? "20px" : "",
                        }}
                    >
                        ${product.price}
                    </span>
                    {product.originalPrice && (
                        <span className="discount-price">
                            ${product.originalPrice}
                        </span>
                    )}
                </p>
            </div>
            <div className="buttons-section">
                <button
                    className="btn-add-to-cart"
                    onClick={() => handleAddToCart(product)}
                >
                    Add to Cart
                </button>
                <button className="btn-view">view</button>
            </div>
        </div>
    );
};

export default ProductCard;
