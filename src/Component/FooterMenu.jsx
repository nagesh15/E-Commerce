import React from "react";

const FooterMenu = ({ mainTitle, subMenu, address }) => {
    return (
        <div className="footer-menu">
            <h3>{mainTitle}</h3>
            <ul className="footer-menu-list">
                {address && <li style={{ color: "black" }}>{address}</li>}
                {subMenu.map((menu, index) => {
                    return <li key={index}>{menu}</li>;
                })}
            </ul>
        </div>
    );
};

export default FooterMenu;
