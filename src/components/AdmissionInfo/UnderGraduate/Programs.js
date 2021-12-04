import React from 'react';
import { useHistory } from 'react-router';

const Programs = (props) => {
    const {dept, title, body} = props.dept;
    const history = useHistory()
    const handleClick = () => {
        const url = `/department/${dept}`;
        history.push(url)
    }
    
    return (
        <div className="col-md-4 py-1">
            <div class="card" style={{width:'18em',cursor:'pointer'}} onClick={() => handleClick(dept)}>
                <div class="card-body">
                    <h5 class="card-title">Department of {dept}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{body}</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
                </div>
                </div>
        </div>
    );
};

export default Programs;