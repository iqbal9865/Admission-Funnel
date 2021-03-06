import React from 'react';
import ReactPlayer from 'react-player';
import TestimonialsCSS from './Testimonials.module.css'

import TestmonialImage1 from '../../../images/TestimonialP1.png';
import TestmonialImage2 from '../../../images/TestimonialP2.png';
import TestmonialImage3 from '../../../images/TestimonialP3.png';

const Testimonials = () => {
    return (
        <div className={TestimonialsCSS.bg}>
        <div className='container'>
            
            <div className="row mx-md-n5 py-5">
                <div style={{backgroundColor: '#23303F',border:'10px solid #FA9516',borderRadius:'1em',color:'white'}} className="col px-md-3 col-md-8">
                    <div className="p-3 py-5">
                        <div className="py-4">
                            <h1 style={{fontWeight: 'bold'}} className={TestimonialsCSS.topHeader}>Admission Going On, 50% Off for Spring Semester 2022</h1>
                        </div>
                        <div className="py-4 ">
                            <div className="player-wrapper">
                                <ReactPlayer  url="https://youtu.be/GNB-lK_cAXo" 
                                    className="react-player"
                                    playing = {false}
                                    // controls={false}
                                    autoPlay={false}
                                    autoStart={false}
                                />
                            </div>
                           
                        </div>
                        <div className="py-4">
                            <h2 className="py-2" style={{fontWeight:'700'}}>Remind Students Why They Need To Go To Next Step Here</h2>
                            <ul className={TestimonialsCSS.unorderlist} style={{color:"lightgray",fontWeight:'600',fontStyle:'italic'}}>
                                <li> <p>1. visitor can see all of the information about admission</p>  </li>
                                <li> <p>2. All of the information about tution fee of every departments</p>  </li>
                                <li> <p>3. Visitor can see Department wise information like CSE,EEE, BBA etc.</p>  </li>
                                <li> <p>4. Unlock online admission process, it is time saving, less effort for students</p>  </li>
                                <li> <p>5. Complete Payment to 01755837019 and then transaction id & others info give us in payment form.</p>  </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
                <div className="col px-md-3 col-md-4 " style={{color:'white'}}>
                    <div className="px-4 py-4" style={{borderRadius:'1em',backgroundColor:'#23303F',border:'10px solid #FA9516'}}>

                        <div className='my-4'>
                            <div className='my-2'>
                                <img className="img-fluid w-50" src={TestmonialImage1} alt="" />
                            </div>
                            <div className="my-4" style={{color:"lightgray",fontWeight:'500'}}>
                                <p className={TestimonialsCSS.paraStyle}>I love this product! The application is limitless and the support is great. I definitely recommend it!</p>
                                <p>John Doe / Programmer</p>
                            </div>
                                
                        </div> 

                        <div className='my-4'>
                            <div className='my-2'>
                                <img className="img-fluid w-50" src={TestmonialImage2} alt="" />
                            </div>
                            <div className="my-4"  style={{color:"lightgray",fontWeight:'500'}}>
                                <p className={TestimonialsCSS.paraStyle}>I love this product! The application is limitless and the support is great. I definitely recommend it!</p>
                                <p>Alexa Ant / Actor</p>
                            </div>
                               
                        </div>   

                        <div className='my-4'>
                            <div className='my-2'>
                                <img className="img-fluid w-50" src={TestmonialImage3} alt="" />
                            </div>
                            <div className="my-4"  style={{color:"lightgray",fontWeight:'500'}}>
                                <p className={TestimonialsCSS.paraStyle}>I love this product! The application is limitless and the support is great. I definitely recommend it!</p>
                                <p>Cristain Robert / Bussiness Man</p>
                            </div>                             
                        </div> 
                    </div>
                </div>
            </div>
      </div>
      </div>
    )
}
export default Testimonials;