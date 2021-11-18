import React from 'react';
import ReactPlayer from 'react-player';
import TestimonialsCSS from './Testimonials.module.css'

import TestmonialImage1 from '../../../images/TestimonialP1.png';
import TestmonialImage2 from '../../../images/TestimonialP2.png';
import TestmonialImage3 from '../../../images/TestimonialP3.png';



const Testimonials = () => {
    return (
        <div className='container'>
            <div className="row mx-md-n5 my-5">
                <div style={{backgroundColor: '#202044',border:'10px solid #E55259',borderRadius:'1em',color:'white'}} className="col px-md-3 col-md-8">
                    <div className="p-3 py-5">
                        <div className="py-4">
                            <h1>Admission Going On, 30% Off for Spring Semester 2022</h1>
                        </div>
                        <div className="py-4">
                            <ReactPlayer url="https://youtu.be/1sfGOrN33Q4?list=TLGGDRZgbbz7iVsxODExMjAyMQ" />
                        </div>
                        <div className="py-4">
                            <h3 className="py-2">Remind your customers why they need to go to next step here</h3>
                            <ul className={TestimonialsCSS.unorderlist}>
                                <li> <p>Reason why your lead should take the next step</p>  </li>
                                <li> <p>Reason why your lead should take the next step</p>  </li>
                                <li> <p>Reason why your lead should take the next step</p>  </li>
                                <li> <p>Reason why your lead should take the next step</p>  </li>
                                <li> <p>Reason why your lead should take the next step</p>  </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
                <div className="col px-md-3 col-md-4 " style={{color:'white'}}>
                    <div className="px-4 py-4" style={{borderRadius:'1em',backgroundColor:'#202044',border:'10px solid #E55259'}}>

                        <div className='my-4'>
                            <div className='my-2'>
                                <img className="img-fluid w-50" src={TestmonialImage1} alt="" />
                            </div>
                            <div className="my-4">
                                <p className={TestimonialsCSS.paraStyle}>I love this product! The application is limitless and the support is great. I definitely recommend it!</p>
                                <p>John Doe / Programmer</p>
                            </div>
                                
                        </div> 

                        <div className='my-4'>
                            <div className='my-2'>
                                <img className="img-fluid w-50" src={TestmonialImage2} alt="" />
                            </div>
                            <div className="my-4">
                                <p className={TestimonialsCSS.paraStyle}>I love this product! The application is limitless and the support is great. I definitely recommend it!</p>
                                <p>Alexa Ant / Actor</p>
                            </div>
                               
                        </div>   

                        <div className='my-4'>
                            <div className='my-2'>
                                <img className="img-fluid w-50" src={TestmonialImage3} alt="" />
                            </div>
                            <div className="my-4">
                                <p className={TestimonialsCSS.paraStyle}>I love this product! The application is limitless and the support is great. I definitely recommend it!</p>
                                <p>Cristain Robert / Bussiness Man</p>
                            </div>
                                
                        </div> 
                    </div>
                </div>
            </div>
      </div>
    )
}
export default Testimonials;