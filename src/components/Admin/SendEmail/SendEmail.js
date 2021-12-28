import React,{useState} from 'react';
import emailjs from 'emailjs-com'
import AdminSideBar from '../AdminSideBar/AdminSideBar'
import {useForm} from "react-hook-form";
const SendEmail = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = (data) => {
        
        const eventData = {
            email: data.email, 
            name: data.name, 
            subject: data.subject,
            text: data.text
        }
        console.log(eventData)
        // e.preventDefault();
        emailjs.send('service_0z2t2ze','template_nwuzhkm',eventData, 'user_jhLSFjXgv96rNW9HkCBaq')
        .then(res => console.log(res))
        .then(data => console.log(data))
        alert('Email Send!');

    }
    return (
        <div className="row">
            <div className="col-md-3">
                <AdminSideBar />
            </div>
            <div className="col-md-8 p-5"> 
            <h2 style={{fontWeight:'700', textAlign:'left'}} className="p-2">SEND EMAIL</h2>
                <form className="form-group" onSubmit={handleSubmit(onSubmit)}>
                  
                <input type='name' className='form-control' name='name' placeholder='Enter name' {...register("name")} /> <br/>

                    <input type='email' className='form-control' name='email' placeholder='Enter Email' {...register("email", { required: true })} /> <br/>
                    <input type='text' className='form-control' name='subject' placeholder='Enter Subject' {...register("subject", { required: true })} /> <br/>
                    <textarea type='text' row='3' className='form-control' name='text' placeholder="Write Here..." {...register("text", { required: true })} /> <br />
                    <input style={{backgroundColor:'#23303F',color:'white'}} type='submit' value='Send Email' className='form-control' />
                </form>
            </div>
        </div>
    )
}
export default SendEmail;