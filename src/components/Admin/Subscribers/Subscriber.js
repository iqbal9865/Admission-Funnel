import React from 'react';
const btnStyle = {
    backgroundColor:'#23303F',
    color:'white',
    margin:'5px'
}
const Subscriber = ({subscriber}) => {
    return (
        <div className="">
            
            <table class="table table-hover"  >
               
                <tbody>
                    <tr>
                    
                        <td> <strong> {subscriber.email} </strong></td>
                        <button className="btn" style={btnStyle}>Delete</button>

                    </tr>
                    
                 
                </tbody>
                </table>
        </div>
    );
};

export default Subscriber;