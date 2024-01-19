import React from "react";
import { MdOutlineMenuOpen, MdLocationSearching } from "react-icons/md";
import { BiUser, BiHeart } from "react-icons/bi";
import { SlHandbag } from "react-icons/sl";

const CartNavBar = () => {
    return (
        <div className="cart-navbar">
            <div className="menu-icon">
                <span>
                    <MdOutlineMenuOpen />
                </span>
            </div>
            <div className="account-icons">
                <div className="text">
                    <h4>Leather like wood</h4>
                </div>
                <div className="icons">
                    <span>
                        <MdLocationSearching />
                    </span>
                    <span>
                        <BiUser />
                    </span>
                    <span>
                        <BiHeart />
                    </span>
                    <span>
                        <SlHandbag />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CartNavBar;
