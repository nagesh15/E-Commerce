import React from "react";
import useCart from "../hooks/useCart";

const OrderSummaryCard = () => {
    const { cart, setCart } = useCart();
    const shipping = 20;

    const calculateSubtotal = () => {
        return cart.reduce(
            (subtotal, cartItem) => subtotal + cartItem.price * cartItem.qty,
            0
        );
    };

    const handleCheckout = () => {
        setCart([]);
        alert("order placed");
    };

    return (
        <div className="order-summary-card">
            <h1>Order Summary</h1>
            <div className="cost-flex">
                <h4>Subtotal</h4>
                <h4>${parseFloat(calculateSubtotal()).toFixed(2)}</h4>
            </div>
            <div className="cost-flex">
                <h4>shipping</h4>
                <h4>${calculateSubtotal() ? shipping : 0}</h4>
            </div>
            <div className="cost-flex">
                <h4>Total</h4>
                <h4 className="total-cost">
                    $
                    {parseFloat(
                        calculateSubtotal() +
                            (calculateSubtotal() ? shipping : 0)
                    ).toFixed(2)}
                </h4>
            </div>
            <button className="btn-checkout" onClick={handleCheckout}>
                Proceed to checkout
            </button>
        </div>
    );
};

export default OrderSummaryCard;
