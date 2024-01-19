import React from "react";
import { ImSearch } from "react-icons/im";
import { RiArrowDropDownLine } from "react-icons/ri";
import useCart from "../../hooks/useCart";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const { cart } = useCart();
    const navigate = useNavigate();

    const handleCartItemClick = () => {
        navigate("/cart");
    };

    return (
        <>
            <div className="header-container">
                <div className="brand-name">
                    <h1 className="text-uppercase">
                        Hand<span className="pink-color">bags</span>
                    </h1>
                    <h4 className="brand-subtext">Some brand tag line text</h4>
                </div>
                <div className="search-bar">
                    <div className="search-input">
                        <span>
                            <ImSearch />
                        </span>
                        <input type="text" />
                    </div>
                    <button>Search</button>
                </div>
                <div className="cart-details">
                    <h2 className="text-uppercase">cart</h2>
                    <div className="cart-items" onClick={handleCartItemClick}>
                        <p className="pink-color">
                            {cart.length > 0
                                ? `Cart Items ${cart.length}`
                                : "(empty)"}
                        </p>
                        <span>
                            <RiArrowDropDownLine />
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
