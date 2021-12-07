import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="p-5 container">
            <h1 style={{color: '#23303F'}}>404 Error, Page Not Found!</h1>
            <button className="btn m-3" style={{backgroundColor: '#23303F'}}> <Link style={{color:'white', textDecoration:'none'}} to="/admissionOffer">GO TO HOME PAGE</Link> </button>
        </div>
    );
};
export default NotFound;