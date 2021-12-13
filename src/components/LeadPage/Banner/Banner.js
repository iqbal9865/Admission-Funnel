import React,{useState} from 'react';
import banner from '../../../images/banner.jpg';
import BannerCSS from './Banner.module.css'



const Banner = () => {
    const [toggle, setToggle] = useState(false)
    const [toggleSec, setTogleSec] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }
    const handleToggleSec = () => {
        setTogleSec(!toggleSec)
    }

    return (
        <div className="row m-5">
            <div className='col-md-6' >
                <h3 className={BannerCSS.header3}>
                    30% Weaver for New Students
                </h3>
               <div>
            </div>
              
            {/* style={{borderRadius: '10px', backgroundColor: '#EDEDED', padding: '20px'}} */}

               <p className={BannerCSS.para}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. lorem ipsum dolar Lorem ipsum, dolor sit amet consectetur adipisicing elit. lorem
                     {toggle && <span> Neque, aperiam illum. Consequatur voluptates aliquid fuga esse, eum, harum praesentium laudantium natus ipsam ipsum voluptate sed iure reprehenderit vel sequi ratione? Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ullam?Lorem, ipsum. </span>}
                     <span style={{cursor:'pointer', color:'blue'}} onClick={handleToggle}> {toggle ? 'See Less': 'See More'}</span>
                </p>
                
              
            </div>
            <div className='col-md-6'>
            <h3 className={BannerCSS.header3}>
                    20% Weaver for Existing Students
                </h3>
                <p className={BannerCSS.para}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. lorem ipsum dolar Lorem ipsum, dolor sit amet consectetur adipisicing elit. lorem
                     {toggleSec && <span> Neque, aperiam illum. Consequatur voluptates aliquid fuga esse, eum, harum praesentium laudantium natus ipsam ipsum voluptate sed iure reprehenderit vel sequi ratione? Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ullam?Lorem, ipsum. </span>}
                     <span style={{cursor:'pointer', color:'blue'}} onClick={handleToggleSec}> {toggleSec ? 'See Less': 'See More'}</span>
                </p>
            </div>
               
        </div>
    );
};

export default Banner;