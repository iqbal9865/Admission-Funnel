import React from 'react';
import BridgeTop from '../BridgePageTop/BridgeTop'
import Gutters from '../Gutters/Gutters';
import Offers from '../Offers/Offers';
import Testimonials from '../Testimonials/Testimonials';
const BridgeMain = () => {
    return (
        <div>
            <BridgeTop />
            <Gutters />
            <Offers />
            <Testimonials />
        </div>
    );
};

export default BridgeMain;