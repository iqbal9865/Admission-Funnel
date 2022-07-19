import React from 'react';
import BridgeTop from '../BridgePageTop/BridgeTop'
import Blogs from '../Blogs/Blogs';
import Offers from '../Offers/Offers';
import Testimonials from '../Testimonials/Testimonials';
import Videos from '../WebinarVideos/Videos';
import UnlockAdmission from '../UnlockAdmission/UnlockAdmission';
import Events from '../Events/Events';
import BridgeMainCSS from './BridgePageMain.module.css';

const BridgeMain = () => {
  
    return (
        <div>
            <BridgeTop />
            
            <div className=" m-5">
                <Offers />
            </div>
            <div>
                <div className="m-5">
                    <Videos />
                </div>
               
            </div>
            <div  className={`${BridgeMainCSS.videosBg}`}>
                <div className='m-5 '>
                    <Blogs />
                    <Events />
                </div>
            </div>
           
            <Testimonials />
            <UnlockAdmission />
           
        </div>
    );
};

export default BridgeMain;