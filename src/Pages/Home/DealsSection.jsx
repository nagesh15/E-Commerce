import React from "react";
import ImageWithText from "../../Component/ImageWithText";

const DealsSection = ({ deals }) => {
    return (
        <div className="deals-container">
            {deals.map((deal, index) => {
                return <ImageWithText key={index} deal={deal} />;
            })}
        </div>
    );
};

export default DealsSection;
