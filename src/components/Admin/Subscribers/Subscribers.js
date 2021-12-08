import React,{useState,useEffect} from 'react';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import Subscriber from './Subscriber'
const Subscribers = () => {
    const [subscribers, setSubscribers] = useState([])
    useEffect ( () => {
        fetch(`http://localhost:5000/subscribers`)
        .then(res=>res.json())
        .then(data=> setSubscribers(data))
    },[])
    return (
        <div className="row">
            <div className="col-md-3">
                <AdminSideBar />
            </div>
            <div className="col-md-8 p-5">
            <h2  className="pb-3" style={{textAlign:'left'}}>Our Subscribers</h2>
            
            {
                subscribers.map(subscriber => <Subscriber subscriber={subscriber} />)
            }
            </div>
        </div>
    );
};

export default Subscribers;