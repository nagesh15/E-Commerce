import React, { useCallback, useEffect, useRef, useState } from "react";
import bag1 from "./../assets/carrybag1.jpg";
import { RxCross2 } from "react-icons/rx";
import useCart from "../hooks/useCart";
<RxCross2 />;

const CartCard = ({ cartItem }) => {
    const { cart, setCart } = useCart();
    const selectRef = useRef();
    const [subTotal, setSubTotal] = useState(0);

    const handleOptionChange = (cartItem) => {
        const tempCart = [...cart];
        const findItem = tempCart.find((cart) => cart.id === cartItem.id);
        console.log(findItem);

        if (findItem) {
            findItem.qty = selectRef.current.value;
            setCart(tempCart);
        }
    };

    const handleRemoveCartItem = (id) => {
        const updatedCart = cart.filter((cartItem) => cartItem.id !== id);
        setCart(updatedCart);
    };

    return (
        <div className="cart-card">
            <img src={cartItem.image} alt="" />
            <p className="cart-item-title">{cartItem.title}</p>
            <div
                className="color-dot"
                style={{ backgroundColor: cartItem.colors[0] }}
            ></div>
            <p>${cartItem.price}</p>
            <select
                id="number-dd"
                ref={selectRef}
                name="number"
                onChange={() => handleOptionChange(cartItem)}
                value={cartItem.qty}
            >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <p>${cartItem.qty * cartItem.price}</p>
            <span>
                <RxCross2 onClick={() => handleRemoveCartItem(cartItem.id)} />
            </span>
        </div>
    );
};

export default CartCard;
