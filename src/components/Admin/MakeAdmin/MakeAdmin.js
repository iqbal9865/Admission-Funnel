import React,{ useContext} from 'react';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import { UserContext } from '../../../App';
const MakeAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="row">
            <div className="col-md-3">
                <AdminSideBar />
            </div>
            <div className="col-md-8 p-5">
                {/* <h3>{loggedInUser.name}</h3> */}
                <div className="admin-content" style={{textAlign: 'left',color:'#23303F'}}>
                    <h2 className="py-2">Make An Admin </h2>
                    <p style={{fontSize:'18px'}}>If You fulfill the input below with an email then the person will be an admin of this website. Then the person can access the admin panel of this website after complete authentication.</p>
                    <form action="" onSubmit="" className="py-2">
                        <input type="text" className="form-control" placeholder="Enter Name" /> <br/>
                        <input type="email" placeholder="Enter Email for make Admin" className="form-control" /> <br/>
                        <input type="submit" value="SUBMIT" className="btn btn-primary form-control" style={{backgroundColor:'#23303F', color:'white'}} />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;