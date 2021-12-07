import React from 'react';
import BridgeTop from '../BridgePageTop/BridgeTop'
import Blogs from '../Blogs/Blogs';
import Offers from '../Offers/Offers';
import Testimonials from '../Testimonials/Testimonials';
import Videos from '../WebinarVideos/Videos';
import Events from '../Events/Events';
import BridgeMainCSS from './BridgePageMain.module.css';
import {Link} from 'react-router-dom';
import MessengerCustomerChat from 'react-messenger-customer-chat';

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
            <button className='btn btn-warning p-2 m-2'> <Link style={{color:'black', textDecoration:'none'}} to="/admissionInfo">Admission Information</Link> </button>
            <MessengerCustomerChat
                pageId="104893022032193"                
                appId="207350864898723"
             />
        </div>
    );
};

export default BridgeMain;