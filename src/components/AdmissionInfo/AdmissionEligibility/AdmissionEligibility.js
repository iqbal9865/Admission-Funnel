import React from 'react';
import SideBar from '../SideBar/SideBar';

const AdmissionEligibility = () => {
    return (
        <div className="row p-5">
        <div className="col-md-3 col-sm-12">
            <SideBar />
        </div>
        <div className='col-md-9 col-sm-12 px-lg-5' style={{textAlign:'justify', fontWeight:'700', color:'#23303F'}}> 
            <div className='m-3' >
                <h2>Admission Eligibility</h2>
                <p>
                To be eligible for admission as a regular student the application must have:

                1. Completed higher secondary education (12 years of schooling pre-university education) under a system different from SSC/HSC or O/A-Levels will be considered for equivalent by the University on a case to case basis
                2. A minimum GPA of 2.5 each in SSC/Equivalence and HSC/equivalence examination and must have a total GPA 6.00
                3. B Grade/GPA 4.0 and for A-Level students two subjects with minimum C Grade/GPA 3.5 for O-Level students five subjects with minimum
                4.GPA 5.0 Freedom fighters ward will be considered a total
                5. 410 out of 800 and in average 450 for GED examination each courses marks must have
                6.A minimum SSC/O-Level and HSC/A-Level must have GPA 2.0 in case of Music, Fashion Design, Fine Arts & Graphic Design Programs.
                </p>
            </div>
            <div className='m-3' >
            <h2>Required Papers For Admission</h2>
            <p>* Two (2) attested copies of all mark sheets & certificates. (Original academic papers must present at admission time).
            * Four (4) attested copies of recent passport size color photographs.
            * Attested copy of national ID card.
            * Attested copy of certificate from Union Parisad/ Word Commissioner.
            * Job experience certificate for EMBA.</p>
            <h2>Admission Procedure</h2>
            <p>A candidate seeking admission in Undergraduate  Program must
            <br />
            1. Collect or download prescribed admission form. <br />
            2. Fill-up prescribed admission form. <br />
            3. Submit the admission form with 4 copies of attested passport size color photographs within the deadline and pay for the admission form, if he has not already paid.<br />
            4. Seat for admission Test.
            5. Submit attested copies of certificates/testimonials of all board examinations passed. <br />
            6. Submit 4 copies of passport size and attested color photographs. <br />
            7. Pay admission and other fees. <br />
            10. Collect ID card when ready from the Admission Office.</p>
            </div>
        </div>
    </div>
    );
};

export default AdmissionEligibility;