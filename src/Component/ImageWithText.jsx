import React from "react";

const ImageWithText = ({
    deal: { title, subtext, image, buttonBackground, backgroundColor, text },
}) => {
    return (
        <div
            className="deal-card"
            style={{ backgroundColor: image ? "" : backgroundColor }}
        >
            {image && <img src={image} alt="Deals" />}
            <div className={image ? "deal-details" : "no-image-deal"}>
                <h1 className="text-uppercase">{title}</h1>
                <h2 className="text-uppercase">{subtext}</h2>
                {image ? (
                    <button style={{ backgroundColor: buttonBackground }}>
                        Shop now
                    </button>
                ) : (
                    <h4>{text}</h4>
                )}
            </div>
        </div>
    );
};

export default ImageWithText;
