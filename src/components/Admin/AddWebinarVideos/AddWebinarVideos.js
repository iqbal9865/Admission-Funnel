import React from 'react';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
const btnStyle = {
    color:'white',
    backgroundColor:'#23303F'
}
const AddWebinarVideos = () => {
    return (
        <div className="row"> 
            <div className="col-md-3">
                <AdminSideBar />
            </div>
            <div className="col-md-8 p-5">
                <h2 style={{textAlign:'left'}} className="my-2">Add Webinar Videos</h2>
                <form action="" onSubmit="">
                    <input type="text" placeholder="Enter Video Title" className="form-control" /> <br />
                    <input type="text" placeholder="Enter Guest Name"  className="form-control" /> <br />
                    <input type="file" name="videos" id="" className="form-control"/> <br />
                    <input type="submit" value="SUBMIT" className="form-control" style={btnStyle}/>
                </form>
            </div>
        </div>
    );
}; 
 
export default AddWebinarVideos;