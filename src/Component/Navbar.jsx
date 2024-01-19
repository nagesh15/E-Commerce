import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ImUnlocked } from "react-icons/im";

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="menus">
                <div className="menu-list">
                    <NavLink to="/" className="menu">
                        Home
                    </NavLink>
                    <Link className="menu">Contact</Link>
                    <Link className="menu">Shopping</Link>
                    <Link className="menu">Bookmark</Link>
                </div>
                <div className="navbar-icons">
                    <span className="icon">En</span>
                    <span className="icon">$</span>
                    <span className="icon">
                        <ImUnlocked />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
