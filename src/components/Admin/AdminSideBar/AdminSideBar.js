import React,{useState} from 'react';
import "./AdminSideBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import { faFileSignature } from '@fortawesome/free-solid-svg-icons';
import { faVideo} from '@fortawesome/free-solid-svg-icons';
import { faFileVideo} from '@fortawesome/free-solid-svg-icons';
import { faUserFriends} from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons';
import { faCalendarWeek} from '@fortawesome/free-solid-svg-icons';
import { faCalendarPlus} from '@fortawesome/free-solid-svg-icons';
import { faUsersCog} from '@fortawesome/free-solid-svg-icons';

const AdminSideBar = () => {
    const [togglebtn, setTogglebtn] = useState(true)
    const handleToggle = () => {
        setTogglebtn(!togglebtn)
    }
    return (
        <div className="admin-sidebar">
            <div className="p-4">
                <button className='btn btn-dark d-sm-none' onClick={handleToggle}>==</button>
                {togglebtn && <ul>
                    
                    <li  className="py-2"><FontAwesomeIcon className='mx-1' icon={faFileSignature}/> Manage Admission</li>
                    <li  className="py-2"><FontAwesomeIcon className='mx-1' icon={faUserFriends}/> Manage Subscriber</li>
                    <li  className="py-2"><FontAwesomeIcon className='mx-1' icon={faVideo}/> Add Webinar Video</li>
                    <li  className="py-2"><FontAwesomeIcon className='mx-1' icon={faEnvelopeSquare}/> E-mail Automations</li>
                    <li  className="py-2"><FontAwesomeIcon className='mx-1' icon={faBlog}/> Write an Articles</li>
                    <li  className="py-2"> <FontAwesomeIcon className='mx-1' icon={faCalendarWeek}/> Add Campaigns</li>
                    <li  className="py-2"> <FontAwesomeIcon className='mx-1' icon={faCalendarPlus}/> Manage Events</li>
                    <li  className="py-2"><FontAwesomeIcon className='mx-1' icon={faFileVideo}/> Manage Webinar</li>
                    <li  className="py-2"> <FontAwesomeIcon className='mx-1' icon={faUsersCog}/>Make an Admin</li>
                   
                   
                    <li  className="pt-md-5 mt-md-2 pt-sm-none mt-sm-none" id="logout">Log Out <FontAwesomeIcon className='mx-1' icon={faSignOutAlt}/></li>

                </ul>}
               
            </div>
        </div>
    );
};

export default AdminSideBar;