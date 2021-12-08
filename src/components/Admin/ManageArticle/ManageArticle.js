import React from 'react';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import {useForm} from 'react-hook-form';
const btnColor = {
    backgroundColor:'#23303F',
    color:'white'
}
const ManageArticle = () => {
    const {register, handleSubmit, error} = useForm();

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            title: data.title,
            body: data.body
        }

       console.log(eventData)
       fetch('http://localhost:5000/addBlogs', {
           method: 'POST',
           headers : {'content-type': 'application/json'},
           body : JSON.stringify(eventData)
       })
       .then(res => res.json())
       .then(success => {
           if(success){
               alert("Blog Uploaded Successfully!")
           }
       })
    }
    return (
        <div className="row">
            <div className="col-md-3">
                <AdminSideBar />
            </div>
            <div className="col-md-8 p-5 ">
                <h2 className="p-2" style={{textAlign: 'left'}}>Add Article</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input {...register("name", { required: true })}  type="text" placeholder="Enter Author Name" className="form-control"  /> <br />

                        <input {...register("title", { required: true })}  type="text"  placeholder="Blog Title" className="form-control" /> <br />

                        <textarea {...register("body", { required: true })}  placeholder="Write Here..."  className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea> <br />

                        <input type="submit" value="SUBMIT" className="form-control" style={{backgroundColor:'#23303F',color:'white'}}/>
                    </div>
                </form>

                <div className="article-container pt-5" style={{textAlign:'justify'}}>
                    <h2>All Articles</h2>
                    <div className="article d-flex my-2">
                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde.</h5>
                        <button className="btn mx-2" style={btnColor}>Edit</button>
                        <button className="btn mx-2" style={btnColor}>Delete</button>
                    </div>
                    <div className="article d-flex my-2">
                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde.</h5>
                        <button className="btn  mx-2" style={btnColor}>Edit</button>
                        <button className="btn mx-2" style={btnColor}>Delete</button>
                    </div>
                    <div className="article d-flex">
                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde.</h5>
                        <button className="btn  mx-2" style={btnColor}>Edit</button>
                        <button className="btn  mx-2" style={btnColor}>Delete</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ManageArticle;