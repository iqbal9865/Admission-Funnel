import React,{useState} from 'react';
import BridgeTopCSS from './BridgeTop.module.css'
// import Typical from 'react-typical'
import Registration from '../WebinarReg/Registration'

const BridgeTop = () => {

  const [modalIsOpen,setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

    return (
       <div className={BridgeTopCSS.bg}>
          <div className="row py-5">
              <div className="col-md-5 py-5">
                                
              </div>
              <div className="col-md-6 p-5 "  style={{backgroundColor:'rgba(0,0,0,0.72)', color:'white'}}>
                <h5 style={{fontWeight:'700'}}>TO KNOW MORE ABOUT ADMISSION OFFER AND OUR INSTITUTION ACTIVITY</h5>

                {/* <h1 className='py-4' style={{fontWeight:'700',color:'#FA9516'}}>
                <Typical
                                steps={['A LIVE WEBINAR SESSION IS UPCOMING!', 500, "A LIVE WEBINAR SESSION IS ONGOING!",500]}
                                loop={Infinity}
                                wrapper="p"
                            />
                  </h1> */}

                <h1 className='py-4' style={{fontWeight:'700',color:'#FA9516'}}>A LIVE WEBINAR SESSION IS UPCOMING!</h1>
                <h5 style={{fontWeight:'700'}}>JOIN THE WEBINAR TO CONNECT WITH US MORE CLOSSER</h5> 
                        
                <button onClick={openModal} className={`my-3 ${BridgeTopCSS.btnreg} ${BridgeTopCSS.btnregh}`}>REGISTRATION NOW</button>
                <Registration modalIsOpen={modalIsOpen} closeModal={closeModal} />
              </div>
          </div>
       </div>
    );
};

export default BridgeTop;