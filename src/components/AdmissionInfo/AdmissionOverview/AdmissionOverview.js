import React from 'react';
import SideBar from '../SideBar/SideBar';
import AdmissionOverviewCSS from './AdmissionOverview.module.css'
const AdmissionOverview = () => {
   document.title = "Admission Overview - XYZ University"
    return (
       
        <div className="" style={{color:'black'}}>
            <div className='row p-5' >
                
                <div className='col-md-3 col-sm-12'>
                    <SideBar />
                </div>

                <div className="col-md-9 col-sm-12 px-lg-5 py-3" style={{textAlign:'justify', fontWeight:'700'}}>
                    <h3>How to apply for admission?</h3>
                    <p>Students seeking admission can collect Admission Form from admission office OR download it from the website following the link given below with paying Tk.800  and can submit the same either online or directly to admission office.</p>


                    <h3>Direct submission</h3>
                    <p>
                    Visit admission office and submit the filled in application form with 2 passport size color photographs and required papers.
                    </p>

                    <h3>Online submission</h3>
                    <p>
                        <ul>
                            <li style={{textAlign: 'left', color: 'black'}}>Go to XYZ University Website, go to admission, and then go to Apply Online.</li>
                            <li style={{textAlign: 'left', color: 'black'}}>Fill- up the Admission Form.</li>

                            <li style={{textAlign: 'left', color: 'black'}}>Submit the form online.</li>
                        
                        </ul></p>

                    <h3>Admission Schedule</h3>
                    <p>XYZ University admits students every semester. Admission schedule of the semester showing deadlines for admission form submission, admission fee payment, registration, withdrawal, class commencement etc. is available on the website of the University. The admission schedule may also be known from the Admission Office and from frequent admission announcements published by the University in the leading newspapers. The students seeking admission should visit web site of XYZ University or contact the Admission Office for admission form and further information.</p>

                </div>

            </div>
        </div>
       
    );
};

export default AdmissionOverview;