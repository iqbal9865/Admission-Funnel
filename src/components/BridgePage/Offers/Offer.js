import React from 'react';

const Offer = ( {offer} ) => {
    return (
        <div className="col-md-4 ">
            <div class="card p-4 shadow" >
                <div className="d-flex justify-content-center">
                    <img className="card-img-top img-fluid w-25" src={offer.img} alt="" />
                </div>
                
                <div className="card-body">
                    <h5 className="card-title">{offer.name}</h5>
                    <p className="card-text">{offer.body}</p>
                    
                </div>
                </div>
        </div>
    );
};

export default Offer;