import React from 'react';
import Banner from '../Banner/Banner';
import OptinForm from '../OptinForm/OptinForm';
import OfferSummary from '../OfferSummary/OfferSummary';
const LeadMain = () => {
    return (
        <div className=''>
            <div>
                <OfferSummary />
            </div>
            <div className="container-fluid mt-5 px-5" >
                <Banner /> 
          </div>
            
        </div>
      
       
    );
};

export default LeadMain;