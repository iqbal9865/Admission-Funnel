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
import {Link} from 'react-router-dom'
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
                    <li  className="py-2"><FontAwesomeIcon className='mx-1' icon={faUserFriends}/><Link to="/subscribers" className="dashboard-link"> Manage Subscriber</Link></li>
                    <li  className="py-2"><FontAwesomeIcon className='mx-1' icon={faVideo}/> <Link to="/addWebinarVideos" className="dashboard-link"> Add Webinar Video</Link></li>
                    <li  className="py-2"><FontAwesomeIcon className='mx-1' icon={faEnvelopeSquare}/> E-mail Automations</li>
                    <li  className="py-2"> <FontAwesomeIcon className='mx-1' icon={faCalendarWeek}/> <Link className="dashboard-link" to="/manageCampaign">Manage Campaigns</Link> </li>
                    <li  className="py-2"><FontAwesomeIcon className='mx-1' icon={faBlog}/> <Link className="dashboard-link" to="/manageArticle">Manage Articles</Link></li>
                    
                    <li  className="py-2"> <FontAwesomeIcon className='mx-1' icon={faCalendarPlus}/><Link className="dashboard-link" to="/manageEvents"> Manage Events</Link></li>
                    <li  className="py-2"><FontAwesomeIcon className='mx-1' icon={faFileVideo}/> Manage Webinar</li>
                    <li  className="py-2"> <FontAwesomeIcon className='mx-1' icon={faUsersCog}/><Link to='/admin' className="dashboard-link">  Make an Admin </Link></li>
                    <li  className="pt-md-5 mt-md-2 pt-sm-none mt-sm-none" id="logout"><Link to="/" className="dashboard-link">Log Out </Link><faFileSignatureFontAwesomeIcon className='mx-1' icon={faSignOutAlt}/></li>

                </ul>}
               
            </div>
        </div>
    );
};

export default AdminSideBar;