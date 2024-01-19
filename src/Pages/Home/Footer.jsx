import React from "react";
import FooterMenu from "../../Component/FooterMenu";
import { FooterData } from "../../Data/FooterData";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                {FooterData.map((footer, index) => {
                    return (
                        <FooterMenu
                            key={index}
                            mainTitle={footer.mainTitle}
                            subMenu={footer.subMenu}
                            address={footer.address ? footer.address : ""}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Footer;
