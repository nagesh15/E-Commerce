import React from "react";
import { CartFooterData } from "./../Data/CartFooterData";
import FooterMenu from "../Component/FooterMenu";
import { BiLogoGmail, BiPhone } from "react-icons/bi";

const CartFooter = () => {
    return (
        <div className="cart-footer">
            <div className="address">
                <div className="contacts">
                    <h1>Leather Like Wood</h1>
                    <div className="flex-row">
                        <span>
                            <BiPhone />
                        </span>
                        +1 892 912-2893
                    </div>
                    <div className="flex-row">
                        <span>
                            <BiLogoGmail />
                        </span>
                        info@likewood.com
                    </div>
                </div>
                <p>&copy; copyright 2024 Likewood.com</p>
            </div>
            <div className="footer-menus">
                {CartFooterData.map((footer, index) => {
                    return (
                        <FooterMenu
                            key={index}
                            mainTitle={footer.mainTitle}
                            subMenu={footer.subMenu}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default CartFooter;
