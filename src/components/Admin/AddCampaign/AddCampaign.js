import React from 'react';
import AdminSideBar from '../AdminSideBar/AdminSideBar';

const AddCampaign = () => {
    return (
        <div className="row ">
            <div className="col-md-3">
                <AdminSideBar />
            </div>
            <div className="p-5 col-md-8">
                <h2 style={{textAlign: 'left', color:'#23303F'}} className='my-2'>Add Campaign</h2>
            <form action="" onSubmit="" >
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter Campaign Name" /> <br />
                    <input type="date" name="date" id="" className="form-control" /> <br />
                    <input type="time" name="time" id="" className="form-control" /> <br />
                    <input type="submit" className='btn btn-primary form-control' value="ADD Campaign" style={{backgroundColor:'#23303F'}} />
                </div>
            </form>
            </div>
        </div>
    )
}
export default AddCampaign