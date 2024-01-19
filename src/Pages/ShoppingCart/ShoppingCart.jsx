import React from "react";
import "./../../Styles/ShoppingCart.css";
import CartNavBar from "./CartNavBar";
import CartDetails from "./CartDetails";
import SuggestionList from "./SuggestionList";
import ContactDetails from "./ContactDetails";

const ShoppingCart = () => {
    return (
        <div className="cart-container">
            <div className="side-title">
                <h4>Shopping cart</h4>
            </div>
            <div className="cart-main">
                <div className="cart-summary">
                    <CartNavBar />
                    <div className="main-title">
                        <h1>Shopping Cart</h1>
                    </div>
                    <CartDetails />
                    <div className="suggestion">
                        <h1>You may also like</h1>
                    </div>
                    <SuggestionList />
                    <ContactDetails />
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;
