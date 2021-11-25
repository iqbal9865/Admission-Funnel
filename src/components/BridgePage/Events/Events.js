import React from 'react';
import Event from './Event';
import progcont from '../../../images/progcon.png'
import busscom from '../../../images/busscom.png'
import matholy from '../../../images/matholy.jpg'
const eventsInfo = [
    {
        pic: progcont,
        name: 'Programming Contest Fall Semester 2021'
    },
    {
        pic:busscom,
        name:'Bussiness competition Fall Semester 2021'
    },
    {
        pic: matholy,
        name:'Math Olympiard Summer Fall Semester 2021'
    }
]

const Events = () => {
    return (
        <div className="row my-5 py-2">
            <h1 className=""  style={{color:'#2E374E',fontWeight:'700'}}>RECENT EVENTS</h1>
            {
                eventsInfo.map(event => <Event key={event.name} event={event} /> )
            }
        </div>
    )
}
export default Events;