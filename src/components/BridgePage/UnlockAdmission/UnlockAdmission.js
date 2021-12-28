import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UnlockAdmissionCSS from './UnlockAdmission.module.css';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
const UnlockAdmission = () => {
    return(
        <div>
            <div style={{backgroundColor: '#2E374E', marginTop: '25px'}}>
                <div style={{paddingTop: '70px', paddingBottom: '70px'}}>
                    <button className={`${UnlockAdmissionCSS.btnUnlock}`} style={{fontSize: '25px', fontWeight: '700', textTransform: 'uppercase'}}> <Link style={{color:'black', textDecoration:'none'}} to="/admissionInfo">Admission Information <FontAwesomeIcon icon={faSignOutAlt} /> </Link> </button>
                </div>
            </div>
        </div>
    )
}

export default UnlockAdmission;