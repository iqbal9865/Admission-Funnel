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

    const deleteSubscriber =(id) => {
        console.log(id)
        fetch(`http://localhost:5000/delete/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log('Delete ',id)
        })
        setSubscribers(subscribers.filter(subscriber => subscriber._id !== id ))
    }

    return (
        <div className="row">
            <div className="col-md-3">
                <AdminSideBar />
            </div>
            <div className="col-md-8 p-5">
            <h2  className="pb-3" style={{textAlign:'left'}}>Our Subscribers</h2>

               { subscribers.length ?
               <Subscriber subscribers={subscribers} deleteSubscriber={deleteSubscriber}/>
                :
                'No Subscriber Yet'}
                
            </div>
        </div>
    );
};

export default Subscribers;