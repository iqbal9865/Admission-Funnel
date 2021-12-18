import React,{ useContext, useState, useEffect} from 'react';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import { UserContext } from '../../../App';
import {useForm} from "react-hook-form";
import {Link} from 'react-router-dom'
const MakeAdmin = () => {
   
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const {register, handleSubmit, error} = useForm();

    // const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [isAdmin, setIsAdmin] = useState(false)
    useEffect(() => {
        fetch('https://cryptic-stream-76661.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({email : loggedInUser.email})
        })
        .then(response => response.json())
        .then(data => setIsAdmin(data))
    }, [])


    const onSubmit = data => {
        const eventData = {
            name: data.name,
            email: data.email,   
        }

       console.log(eventData)
       fetch('https://cryptic-stream-76661.herokuapp.com/addAdmin', {
           method: 'POST',
           headers : {'content-type': 'application/json'},
           body : JSON.stringify(eventData)
       })
       .then(res => res.json())
       .then(data => console.log(data))
       alert('Added Admin')
    }

    return (
        <div className="row">
            <div className="col-md-3">
                <AdminSideBar />
            </div>
            {isAdmin ? <div className="col-md-8 p-5">
                {/* <h3>{loggedInUser.name}</h3> */}
                <div className="admin-content" style={{textAlign: 'left',color:'#23303F'}}>
                    <h2 className="py-2">Make An Admin </h2>
                    <p style={{fontSize:'18px'}}>If You fulfill the input below with an email then the person will be an admin of this website. Then the person can access the admin panel of this website after complete authentication.</p>
                    <form action="" onSubmit={handleSubmit(onSubmit)} className="py-2">
                        <input {...register("name", { required: true })}  type="text" className="form-control"  placeholder="Enter Name" /> <br/>
                        <input {...register("email", { required: true })}  type="email" name="email" placeholder="Enter Email for make Admin" className="form-control" /> <br/>
                        <input type="submit" value="SUBMIT" className="btn btn-primary form-control" style={{backgroundColor:'#23303F', color:'white'}} />
                    </form>
                </div>
            </div> : 
                <div className="py-5">
                    <h1 className="text-danger">You Have No Permission TO Access Admin Panel</h1>
                    <button className="btn btn-success my-4"><Link style={{color:'white',textDecoration:'none'}} to="/admissionOffer"> GO TO HOME PAGE</Link></button>
                </div>
            }
        </div>
    );
};

export default MakeAdmin;