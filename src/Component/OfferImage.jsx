import React from "react";
import CoverPhoto from "../assets/coverphoto.jpg";

const OfferImage = () => {
    return (
        <div className="offer-container">
            <img src={CoverPhoto} alt="cover image" />
            <div className="offer-details">
                <h1 className="text-uppercase">cross body</h1>
                <h2 className="text-uppercase">get up to</h2>
                <h1 className="text-uppercase pink-color">50% off</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Alias reprehenderit doloremque fugit nemo possimus rem neque
                    molestias itaque tempore repellendus fugiat cupiditate.
                </p>
                <h3 className="text-uppercase link">shop now</h3>
            </div>
        </div>
    );
};

export default OfferImage;
