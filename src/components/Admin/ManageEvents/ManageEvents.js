import React from 'react';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
const btnColor = {
    backgroundColor:'#23303F',
    color:'white'
}
const ManageEvents = () => {
    return (
        <div className="row">
            <div className="col-md-3">
                <AdminSideBar />
            </div>
            <div className="col-md-8 p-5">
                <h2 style={{textAlign:'left'}}>Add Events</h2>
                <form action="" className="my-4" onSubmit="">
                    <input type="text" className="form-control" placeholder="Events Name"/> <br />
                    <input type="file" name="eventPicture" id="" className="form-control"/> <br />
                    <input type="submit" value="SUBMIT" className="form-control " style={{backgroundColor:'#23303F', color:'white'}} />
                </form>
                <h2 style={{textAlign:'left'}}>Manage Events</h2>
                <div style={{textAlign:'left'}}>
                    <div className="d-flex my-4">
                        <h5>Programming Contest</h5>
                        <button className="btn btn-primary mx-2"  style={btnColor}>Edit</button>
                        <button className=" btn btn-primary mx-2"  style={btnColor}>Delete</button>
                    </div>
                    <div className="d-flex my-4">
                        <h5>Bussiness Compitions</h5>
                        <button className="btn btn-primary mx-2"  style={btnColor}>Edit</button>
                        <button className="btn btn-primary mx-2"  style={btnColor}>Delete</button>
                    </div>
                    <div className="mx-2 d-flex my-4">
                        <h5>Mathematic Olympiad</h5>
                        <button className="btn btn btn-primary mx-2"  style={btnColor}>Edit</button>
                        <button className="btn btn-primary mx-2"  style={btnColor}>Delete</button>
                    </div>
                    
                   
                </div>
            </div>
        </div>
    );
};

export default ManageEvents;