import React from 'react';
import BridgeTop from '../BridgePageTop/BridgeTop'
import Blogs from '../Blogs/Blogs';
import Offers from '../Offers/Offers';
import Testimonials from '../Testimonials/Testimonials';
import Videos from '../WebinarVideos/Videos';
import UnlockAdmission from '../UnlockAdmission/UnlockAdmission';
import Events from '../Events/Events';
import BridgeMainCSS from './BridgePageMain.module.css';
import {Link} from 'react-router-dom';
// import MessengerCustomerChat from 'react-messenger-customer-chat';
// import SignIn from '../LiveChat/SignIn'
// import Chat from '../LiveChat/Chat'
// import {useAuthState} from 'react-firebase-hooks/auth'
// import {auth} from '../LiveChat/firebase'
const BridgeMain = () => {
    // const [user] = useAuthState(auth)
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

            {/* <MessengerCustomerChat className="fb-customerchat"
                pageId="104893022032193"                
                appId="207350864898723"
             /> */}
             {/* <div style={{borderRadius:'1em', backgroundColor:'#23303F'}}  className="container my-3">
             {
                 user ? <Chat /> : <SignIn />
             }
             </div> */}

            <UnlockAdmission />
           
        </div>
    );
};

export default BridgeMain;