import React from 'react';
import {useState, useEffect,useRef} from 'react';
import OfferSummaryCSS from './OfferSummary.module.css';
import OptinForm from "../OptinForm/OptinForm"
import img from "../../../images/StudentBg1.png"
const OfferSummary  = () => {

    const [timerDays, setTimerDays] = useState("00");
    const [timerHours, setTimerHours] = useState("00");
    const [timerMinites, setTimerMinites] = useState("00");
    const [timerSeconds, setTimerSeconds] = useState("00");

    let interval = useRef();

    const startTimer = () => {
        const countDownDate = new Date('December 31, 2021 00:00:00').getTime();
        interval.current = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 *24));
            const hours = Math.floor((distance % (1000 * 60 * 60 *24) / (1000 * 60 * 60)));
            const minites = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60 )) / 1000);

            if(distance < 0) {
                //stop timer
                clearInterval(interval.current);
            }
            else{
                //update timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinites(minites);
                setTimerSeconds(seconds);
            }

        },1000);
    }

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        };
    });

    return(
        <div style={{"backgroundColor":"#202044"}} className="container-fluid p-5" className={OfferSummaryCSS.topSection}>
           <div className="row py-5">
               <div className="col-md-6 p-5">
                    <h2 style={{color:'#E55259', fontWeight:'700'}} className="mx-3 px-2 pt-4 pb-2 mt-4">30% Weaver For FALL 2021</h2>
                    <h3 style={{color:'white',fontWeight:'700'}} className="py-3">ABCD UNIVERSITY</h3>
                    <h4 style={{color:'white'}} className='py-1'>15 NOVEMBER - 31 DECEMBER</h4>

                    <div style={{color:'white'}} className='timer d-flex align-items-center justify-content-center my-4'>

                        <section className="mx-3" style={{color:'#E55259'}} >
                            <h4>{timerDays}</h4>
                            <h4>Days</h4>
                        </section>

                        <section className="mx-3" style={{color:'#E55259'}}>
                            <h4>{timerHours}</h4>
                            <h4>Hours</h4>
                        </section>

                        <section className="mx-3" style={{color:'#E55259'}}>
                            <h4>{timerMinites}</h4>
                            <h4>Minites</h4>
                        </section>

                        <section className="mx-3" style={{color:'#E55259'}} >
                            <h4>{timerSeconds}</h4>
                            <h4>Seconds</h4>
                        </section>

                    </div>
                    
                    <div className="pb-3">
                        <OptinForm />
                        <p className='mx-5 px-5' style={{color:'white',textAlign:'left', marginTop:"4px"}}>Submit Your Email To See More Details</p>
                    </div>
               </div>
               <div className="col-md-6 p-5">
                    <img className="img-fluid w-75 pt-5" style={{borderRadius:'2em'}} src={img} alt="" />
               </div>
           </div>
        </div>
    )
}
export default OfferSummary;