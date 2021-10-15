import React from 'react';
import image from "../../images/giphy.gif"

const PlaceOrder = () => {
    return (
        <div className="text-center">
            <h1>order placed</h1>
            <img src={image} alt="" />
        </div>
    );
};

export default PlaceOrder;