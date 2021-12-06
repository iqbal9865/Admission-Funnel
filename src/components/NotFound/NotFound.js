import React from 'react';
import {Link} from 'react-router-dom'
const NotFound = () => {
    return (
        <div className="p-5 container">
            <h1 className='text-dark'>404 Error, Page Not Found!</h1>
            <button className="btn btn-dark m-3"> <Link style={{color:'white', textDecoration:'none'}} to="/admissionOffer">GO TO HOME PAGE</Link> </button>
        </div>
    );
};

export default NotFound;