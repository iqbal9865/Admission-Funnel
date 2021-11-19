import React from 'react';
import BridgeTopCSS from './BridgeTop.module.css'
// import Typical from 'react-typical'


const BridgeTop = () => {
    return (
       <div className={BridgeTopCSS.bg}>
          <div className="row py-5">
              <div className="col-md-5 py-5">
                                
              </div>
              <div className="col-md-6 p-5 "  style={{backgroundColor:'rgba(0,0,0,0.72)', color:'white'}}>
                <h5 style={{fontWeight:'700'}}>TO KNOW MORE ABOUT ADMISSION OFFER AND OUR INSTITUTION ACTIVITY</h5>

                {/* <h1 className='py-4' style={{fontWeight:'700',color:'#FA9516'}}>
                <Typical
                                steps={['A LIVE WEBINAR SESSION IS UPCOMING!', 100, 'A SPECIAL OFFER IS GOING ON FOR EXISTING STUDENTS', 100,'30% OFFER IS STILL AVAILABLE FOR NEW STUDENTS', 100,'MERIT SCHOLARSHIP IS AVAILABLE FOR GOOD RESULT', 100]}
                                loop={Infinity}
                                wrapper="p"
                            />
                  </h1> */}

                <h1 className='py-4' style={{fontWeight:'700',color:'#FA9516'}}>A LIVE WEBINAR SESSION IS UPCOMING!</h1>
                <h5 style={{fontWeight:'700'}}>JOIN THE WEBINAR TO CONNECT WITH US MORE CLOSSER</h5> 
                         
                
              </div>
          </div>
       </div>
    );
};

export default BridgeTop;