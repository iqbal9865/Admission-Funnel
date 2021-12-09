import React,{useState, useEffect} from 'react';
import AdminSideBar from '../AdminSideBar/AdminSideBar'
const ManageAdmission = () => {
    const [admitStudents, setAdmitStudents] = useState([])
    useEffect(()=> {
        fetch('http://localhost:5000/onlineAdmission')
        .then(res => res.json())
        .then(data => setAdmitStudents(data))
    },[])
    return(
        <div className="row">
            <div className="col-md-3">
                <AdminSideBar />
            </div>
            <div className="col-md-9 py-5">
                <h2 style={{textAlign:'left', fontWeight:'700'}} className='mb-3'>Admitted Students</h2>
                <table class="table">
                <thead>
                    <tr>
                    
                    <th scope="col">Name</th>  
                    <th scope="col">Email</th>
                    <th scope="col">YEAR</th>
                    <th scope="col">Semester</th>
                    <th scope="col">Department</th>
                    <th scope="col">SSC GPA</th>
                    <th scope="col">HSC GPA</th>
                    <th scope="col">Manage</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        admitStudents.map(registration => 
                            <tr>
                                <td className="my-2">{registration.name}</td>
                                <td className="my-2 ">{registration.email}</td>
                                <td className="my-2 ">{registration.academicYear}</td>
                                <td className="my-2 ">{registration.semsester}</td>
                                <td className="my-2 ">{registration.department}</td>
                                <td className="my-2 ">{registration.sscGpa}</td>
                                <td className="my-2 ">{registration.hscGpa}</td>
                                <button style={{color:'black'}} className="btn btn-success my-2">Accept</button>
                                <button style={{color:'black'}} className="btn btn-danger my-2">Reject</button>
                             </tr>   
                        )
                    }
                </tbody>
                </table>
            </div>
        </div>
    )
}
export default ManageAdmission;