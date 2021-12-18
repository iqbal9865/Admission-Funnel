import React,{useState, useEffect} from 'react';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import RegisterPeople from './RegisterPeople'
const WebinarRegistration = () => {
    const [registrations, setRegistration] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/webinarRegistration')
        .then(res => res.json())
        .then(data => setRegistration(data))
    },[])

    const deleteRegister =(id) => {
        console.log(id)
        fetch(`http://localhost:5000/deleteWebReg/${id}`,{
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(res => {
            console.log('delete: ',id)
        })
        setRegistration(registrations.filter(registration => registration._id !== id))
    }

    return (
        <div className="row">
            <div className="col-md-3">
                <AdminSideBar />
            </div>
            <div className="col-md-8 p-5">
                
                <h3 style={{textAlign: 'left',fontWeight:'700'}} className="pb-3">Registration For Webinar</h3>

                {registrations.length ? <RegisterPeople registrations={registrations} deleteRegister={deleteRegister} /> : 'No Register Yet'}
           
            </div>
        </div>
    );
};

export default WebinarRegistration;