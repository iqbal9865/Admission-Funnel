import React from 'react';

const Event = ({event}) => {
    return (
        <div className="col-md-4 py-4">
            <div className='card shadow p-4'>
                <img src={event.pic} alt='...' className='img-fluid' />
                <h5 className='card-title p-2'  style={{color:'black',fontWeight:'700'}}>{event.name}</h5>
            </div>
          
        </div>
    )
}
export default Event;