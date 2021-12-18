import React from 'react';

const RegisterPeople = ({registrations,deleteRegister}) => {
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                    
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Current Study</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        registrations.map(registration => 
                            <tr>
                                <td className="my-2">{registration.name}</td>
                                <td className="my-2">{registration.phone}</td>
                                <td className="my-2 ">{registration.study}</td>
                                <button style={{color:'black'}} className="btn btn-danger my-2" onClick={() => deleteRegister(registration._id)} >Delete</button>
                             </tr>   
                        )
                    }
                </tbody>
                </table>
         </div>   
    )
}
export default RegisterPeople;