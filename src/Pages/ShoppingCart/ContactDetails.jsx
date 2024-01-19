import React from "react";
import Subscribe from "../../Component/Subscribe";
import CartFooter from "../../Component/CartFooter";

const ContactDetails = () => {
    return (
        <div className="contacts-details">
            <div className="subsciption-container">
                <Subscribe />
            </div>
            <div className="comapny-info">
                <CartFooter />
            </div>
        </div>
    );
};

export default ContactDetails;
