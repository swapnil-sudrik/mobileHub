import React from "react";

const EMIOffers = ({ img }) => {
    return (
        <div className="mt-3 w-100 bg-light" style={{ textAlign: 'center' }}>

            <img src={img} className="img-fluid" alt="dfd" style={{ maxWidth: '100%', height: 'auto' }} />

        </div>
    )
}

export default EMIOffers;