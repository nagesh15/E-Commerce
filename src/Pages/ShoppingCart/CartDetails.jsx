import React from "react";
import CartCard from "../../Component/CartCard";
import OrderSummaryCard from "../../Component/OrderSummaryCard";
import useCart from "../../hooks/useCart";

const CartDetails = () => {
    const { cart } = useCart();
    return (
        <div className="cart-details-container">
            <div className="cart-details">
                {cart.length ? (
                    ""
                ) : (
                    <h1
                        style={{
                            textAlign: "center",
                            padding: "40px",
                            color: "rgb(253, 86, 114)",
                        }}
                    >
                        No Items in Cart
                    </h1>
                )}
                {cart.map((cartItem, index) => {
                    return (
                        <>
                            <CartCard key={index} cartItem={cartItem} />
                            {cart.length <= index + 1 ? "" : <hr />}
                        </>
                    );
                })}
            </div>
            <div className="order-summary">
                <OrderSummaryCard />
            </div>
        </div>
    );
};

export default CartDetails;
