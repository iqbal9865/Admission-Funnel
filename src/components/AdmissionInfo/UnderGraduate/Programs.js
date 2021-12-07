import React from 'react';
import { useHistory } from 'react-router';

const Programs = (props) => {
    const {dept, title, body,img} = props.dept;
    const history = useHistory()
    const handleClick = () => {
        const url = `/department/${dept}`;
        history.push(url)
    }
    
    return (
        <div className="col-md-4 py-1">
            <div class="card" style={{cursor:'pointer'}} onClick={() => handleClick(dept)}>
                <div class="card-body">
                    <img src={img} alt="" className="w-100" />
                    <h5 class="card-title">Department of {dept}</h5>
                    
                    
                </div>
                </div>
        </div>
    );
};

export default Programs;