import React from 'react';
import AdminSideBar from '../AdminSideBar/AdminSideBar'
const SendEmail = () => {
    return (
        <div className="row">
            <div className="col-md-3">
                <AdminSideBar />
            </div>
            <div className="col-md-8 p-5"> 
            <h2 style={{fontWeight:'700', textAlign:'left'}} className="p-2">SEND EMAIL</h2>
                <form className="form-group">
                  
                    <input type='email' className='form-control' name='email' placeholder='Enter Email' /> <br/>
                    <textarea type='text' row='3' className='form-control' name='text' placeholder="Write Here..." /> <br />
                    <input style={{backgroundColor:'#23303F',color:'white'}} type='submit' value='Send Email' className='form-control' />
                </form>
            </div>
        </div>
    )
}
export default SendEmail;