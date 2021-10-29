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
            <div className="row container-fluid">
            <div className="col-md-6">
                <Banner />
            </div>
            <div className="col-md-6">
                <OptinForm />
            </div>
          </div>
            
        </div>
      
       
    );
};

export default LeadMain;