import React,{useState, useEffect} from 'react';
import AdminSideBar from '../AdminSideBar/AdminSideBar'
const ManageAdmission = () => {
    const [admitStudents, setAdmitStudents] = useState([])
    const [payments, setPayments] = useState([])

    useEffect(()=> {
        fetch('https://cryptic-stream-76661.herokuapp.com/onlineAdmission')
        .then(res => res.json())
        .then(data => setAdmitStudents(data))
    },[])
    useEffect(()=> {
        fetch('https://cryptic-stream-76661.herokuapp.com/payment')
        .then(res => res.json())
        .then(data => setPayments(data))
    },[])

    return(
        <div className="row">
            <div className="col-md-3">
                <AdminSideBar />
            </div>
            <div className="col-md-9 py-5">
                <h2 style={{textAlign:'left', fontWeight:'700'}} className='mb-3'>Applicant Students</h2>
                <table class="table">
                <thead>
                    <tr>
                    
                    <th scope="col">Name</th>  
                    <th scope="col">Phone</th>
                    <th scope="col">YEAR</th>
                    <th scope="col">Semester</th>
                    <th scope="col">Department</th>
                    <th scope="col">SSC GPA</th>
                    <th scope="col">HSC GPA</th>
                   
                    </tr>
                </thead>
                <tbody>
                    {
                        admitStudents.map(registration => 
                            <tr>
                                <td className="my-2">{registration.name}</td>
                                <td className="my-2 ">{registration.mobileNumber}</td>
                                <td className="my-2 ">{registration.academicYear}</td>
                                <td className="my-2 ">{registration.semsester}</td>
                                <td className="my-2 ">{registration.department}</td>
                                <td className="my-2 ">{registration.sscGpa}</td>
                                <td className="my-2 ">{registration.hscGpa}</td>
                              
                             </tr>   
                        )
                    }
                </tbody>
                </table>

                <h2 style={{textAlign:'left', fontWeight:'700'}} className='mb-3 pt-3'>Payment</h2>
                <table class="table">
                <thead>
                    <tr>
                    
                    <th scope="col">Phone</th>  
                    <th scope="col">Trans Id</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Via</th>
                    <th scope="col">Reference</th>
                   
                    
                    </tr>
                </thead>
                <tbody>
                    {
                        payments.map(payment => 
                            <tr>
                                <td className="my-2">{payment.phone}</td>
                                <td className="my-2 ">{payment.transId}</td>
                                <td className="my-2 ">{payment.amount}</td>
                                <td className="my-2 ">{payment.method}</td>
                                <td className="my-2 ">{payment.reference}</td>
                                
                              
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