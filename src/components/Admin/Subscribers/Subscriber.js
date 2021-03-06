import React from 'react';
const btnStyle = {
    backgroundColor:'#23303F',
    color:'white',
    margin:'5px'
}
const Subscriber = ({subscribers,deleteSubscriber}) => {
    // const [manage, setManage] = useState([])
   
    return (
        <div className="">
            
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        subscribers.map(subscriber => 
                            <tr>
                                <td className="my-2">{subscriber.email}</td>
                              
                                <button style={{color:'black'}} className="btn btn-danger my-2" onClick={() => deleteSubscriber(subscriber._id)}>Delete</button>
                             </tr>   
                        )
                    }
                </tbody>
                </table>
        </div>
    );
};

export default Subscriber;