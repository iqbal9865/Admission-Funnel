import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Comment = ( {task} ) => {
    
    return (
        <div className=''>
            <div style={{textAlign:'left'}}>
                <FontAwesomeIcon icon={faUser} style={{height:'20px', width:'20px',border:'1px solid black',borderRadius:'50%',padding:'2px'}} /> <strong>unknown</strong>
                <p>{task.text}</p>
            </div>
        </div>
    );
};

export default Comment;