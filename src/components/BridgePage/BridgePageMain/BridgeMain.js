import React from 'react';
import BridgeTop from '../BridgePageTop/BridgeTop'
import Blogs from '../Blogs/Blogs';
import Offers from '../Offers/Offers';
import Testimonials from '../Testimonials/Testimonials';
import Videos from '../WebinarVideos/Videos';
const BridgeMain = () => {
    return (
        <div>
            <BridgeTop />
            
            <div className=" m-5">
                <Offers />
            </div>
            <div className="m-5">
                <Videos />
            </div>

            <div className='m-5 '>
                <Blogs />
            </div>

            <Testimonials />
        </div>
    );
};

export default BridgeMain;