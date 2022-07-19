import React,{useState,useEffect} from 'react';
import Event from './Event';

const Events = () => {
    const [events, setEvents] = useState([])
    useEffect(() => {
        fetch(`https://cryptic-stream-76661.herokuapp.com/events`)
        .then(res=>res.json())
        .then(data=>setEvents(data))
    },[])
    return (
        <div className="row my-5 py-2">
            <h1 className=""  style={{color:'#2E374E',fontWeight:'700'}}>RECENT EVENTS</h1>
            {
                events.map(event => <Event key={event.name} event={event} /> )
            }
        </div>
    )
}
export default Events;