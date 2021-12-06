import React from 'react';
import SideBar from '../SideBar/SideBar';
import ScholarshipCSS from './Scholarship.module.css';
const Scholarships = () => {
    return (
        <div className="row m-5">
        <div className="col-md-3 col-sm-12">
            <SideBar />
        </div>
        <div className='col-md-9 col-sm-12 px-lg-5 py-3' style={{textAlign:'justify', fontWeight:'700'}}>
            <h1 style={{textAlign: 'center'}}>XYZ University Scholarship</h1>
            <p style={{textAlign: 'center'}}>Scholarships on tuition for bachelor’s programs is awarded to students based on their academic performance.</p>
            <hr style= {{color: '#FA9516', height: '2px'}}/>
            <table className={`table table-bordered ${ScholarshipCSS.schtext} ${ScholarshipCSS.schbody}`}>
                <tbody>
                    <tr>
                        <th>
                            <h1>90-95%</h1>
                            <h5>Merit Scholarships</h5>
                        </th>
                        <th>
                            <h1>20-25%</h1>
                            <h5>Performance Scholarships</h5>
                        </th>
                        <th>
                            <h1>BDT 5 Million</h1>
                            <h5>Scholarships Budget Annually</h5>
                        </th>
                    </tr>
                </tbody>
            </table>
            <p style={{marginTop: '50px'}}>For newly admitted undergraduate students : ) Only first semester on the basis of SSC, HSC and equivalent results.</p>
            
            <div style={{marginTop: '20px'}}>
                <table class="table table-bordered">
                    <thead style={{backgroundColor: '#FA9516', verticalAlign: 'middle'}}>
                        <tr style={{textAlign: 'center'}}>
                            <th>Combined GPA/CGPA in SSC & HSC and equivalent</th>
                            <th>Waiver (%) on Tuition Fees</th>
                        </tr>
                    </thead>
                    <tbody style={{verticalAlign: 'middle'}}>
                        <tr>
                            <td>GPA 5.00-5.00 (Both Golden)</td>
                            <td>100%</td>
                        </tr>
                        <tr>
                            <td>GPA 5.00-5.00</td>
                            <td>80%</td>
                        </tr>
                        <tr>
                            <td>GPA 4.50-4.99</td>
                            <td>50%</td>
                        </tr>
                        <tr>
                            <td>GPA 4.00-4.49</td>
                            <td>30%</td>
                        </tr>
                    </tbody>
                </table>
            </div>


            <p style={{marginTop: '50px'}}>Scholarship for continuing undergraduate full-time students (who enroll for at least 9 credits in each semester) based on actual performance of previous two semester and enroll for a minimum of 9 credits hours per semester. To avail the scholarship student must submit the prescribed form within due date.</p>
            
            <div style={{marginTop: '20px'}}>
                <table class="table table-bordered">
                    <thead style={{backgroundColor: '#FA9516', verticalAlign: 'middle'}}>
                        <tr style={{textAlign: 'center'}}>
                            <th>Minimum GPA per semester</th>
                            <th>Percentage of Tuition fee waiver</th>
                        </tr>
                    </thead>
                    <tbody style={{verticalAlign: 'middle'}}>
                        <tr>
                            <td>4.00</td>
                            <td>60%</td>
                        </tr>
                        <tr>
                            <td>3.60-3.99</td>
                            <td>30%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    );
};

export default Scholarships;