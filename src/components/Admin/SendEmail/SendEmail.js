import React from 'react';
import AdminSideBar from '../AdminSideBar/AdminSideBar'
import {useForm} from "react-hook-form";
const SendEmail = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const eventData = {
            email: data.email,
            subject: data.subject,
            text: data.text
        }

       console.log(eventData)
       fetch('http://localhost:5000/email', {
           method: 'POST',
           headers : {'content-type': 'application/json'},
           body : JSON.stringify(eventData)
       })
       .then(res => res.json())
       .then(data => console.log(data))
       alert('Email Try to send!')
    }
    return (
        <div className="row">
            <div className="col-md-3">
                <AdminSideBar />
            </div>
            <div className="col-md-8 p-5"> 
            <h2 style={{fontWeight:'700', textAlign:'left'}} className="p-2">SEND EMAIL</h2>
                <form className="form-group" onSubmit={handleSubmit(onSubmit)}>
                  
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