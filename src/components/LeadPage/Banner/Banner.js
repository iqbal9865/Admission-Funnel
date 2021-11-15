import React from 'react';
import banner from '../../../images/banner.jpg';
import BannerCSS from './Banner.module.css'
const Banner = () => {
    return (
        <div className="row m-5">
            <div className='col-md-6'>
                <h3 className={BannerCSS.header3}>
                    30% Weaver for New Students
                </h3>
                <p className={BannerCSS.para}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, aperiam illum. Consequatur voluptates aliquid fuga esse, eum, harum praesentium laudantium natus ipsam ipsum voluptate sed iure reprehenderit vel sequi ratione? Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ullam?Lorem, ipsum.
                </p>
            </div>
            <div className='col-md-6'>
            <h3 className={BannerCSS.header3}>
                    20% Weaver for Existing Students
                </h3>
                <p className={BannerCSS.para}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, aperiam illum. Consequatur voluptates aliquid fuga esse, eum, harum praesentium laudantium natus ipsam ipsum voluptate sed iure reprehenderit vel sequi ratione? Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, beatae! Lorem ipsum
                </p>
            </div>

        </div>
    );
};

export default Banner;