import React from 'react';
import BridgeTop from '../BridgePageTop/BridgeTop'
import Gutters from '../Gutters/Gutters';
import Offers from '../Offers/Offers';
import Testimonials from '../Testimonials/Testimonials';
import Videos from '../WebinarVideos/Videos';
const BridgeMain = () => {
    return (
        <div>
            <BridgeTop />
            {/* <Gutters /> */}
            <div className=" m-5">
                <Offers />
            </div>
            <div className="m-5">
                <Videos />
            </div>
            <Testimonials />
        </div>
    );
};

export default BridgeMain;