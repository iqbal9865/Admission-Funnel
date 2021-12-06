import React from 'react';
import {Link} from 'react-router-dom'
import './SideBar.css'

const SideBar = () => {
    return (
        <div className=''>
            
                <button  className="btn p-3 form-control button" id='sidebar'> <Link className='link' to='/admissionInfo'>  Admission Overview </Link></button> <br/>
                <button  className="btn p-3 form-control button">  <Link className='link' to="/underGraduate">Undergraduate </Link></button> <br/>
                <button  className="btn p-3 form-control button"> <Link className='link' to='/tutionFees'> Tution Fees </Link></button> <br/>
                <button  className="btn p-3 form-control button"> <Link className='link' to='/scholarships'> Scholarships</Link></button> <br/>
                <button  className="btn p-3 form-control button"> <Link className='link' to="/AdmissionEligibility"> Admission Eligibility </Link> </button> <br/>
                <button  className="btn p-3 form-control button"> <Link className='link' to="/onlineAdmission"> Online Admission </Link></button> <br/>
                <button  className="btn p-3 form-control button"> <Link className='link' to="/payments"> Payments </Link></button> <br/>
               
        </div>
    );
};

export default SideBar;