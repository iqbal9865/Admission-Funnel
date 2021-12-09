import React,{useState,useContext,useEffect} from 'react';
import {UserContext} from '../../../App'
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
import { faUser} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'
const AdminSideBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [isAdmin, setIsAdmin] = useState(false)
    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({email : loggedInUser.email})
        })
        .then(response => response.json())
        .then(data => setIsAdmin(data))
    }, [])

    const [togglebtn, setTogglebtn] = useState(true)
    const handleToggle = () => {
        setTogglebtn(!togglebtn)
    }
    return (
        <div className="admin-sidebar">
            {isAdmin && <div className="p-4" >
                <div className="mx-2 " style={{color:'white'}}>
                    <div style={{border: '1px solid white'}} >
                        <p><strong className=""><FontAwesomeIcon className='mx-1 mt-2' icon={faUser}/>{loggedInUser.name}</strong></p>
                    </div>
                </div>
                <button className='btn btn-dark d-sm-none' onClick={handleToggle}>==</button>
                {togglebtn && <ul>
                    
                    <li style={{textAlign: 'left'}} className="py-2"><FontAwesomeIcon className='mx-1' icon={faFileSignature}/><Link className='dashboard-link' to="/manageAdmission"> Manage Admission</Link></li>
                    <li style={{textAlign: 'left'}} className="py-2"><FontAwesomeIcon className='mx-1' icon={faUserFriends}/><Link to="/subscribers" className="dashboard-link"> Manage Subscriber</Link></li>
                    <li style={{textAlign: 'left'}} className="py-2"><FontAwesomeIcon className='mx-1' icon={faVideo}/> <Link to="/addWebinarVideos" className="dashboard-link"> Add Webinar Video</Link></li>
                    <li style={{textAlign: 'left'}} className="py-2"><FontAwesomeIcon className='mx-1' icon={faEnvelopeSquare}/> E-mail Automations</li>
                    <li style={{textAlign: 'left'}} className="py-2"> <FontAwesomeIcon className='mx-1' icon={faCalendarWeek}/> <Link className="dashboard-link" to="/manageCampaign">Manage Campaigns</Link> </li>
                    <li style={{textAlign: 'left'}} className="py-2"><FontAwesomeIcon className='mx-1' icon={faBlog}/> <Link className="dashboard-link" to="/manageArticle">Manage Articles</Link></li>
                    
                    <li style={{textAlign: 'left'}} className="py-2"> <FontAwesomeIcon className='mx-1' icon={faCalendarPlus}/><Link className="dashboard-link" to="/manageEvents"> Manage Events</Link></li>
                    <li style={{textAlign: 'left'}} className="py-2"><FontAwesomeIcon className='mx-1' icon={faFileVideo}/><Link to="/webinarRegistration" className="dashboard-link"> Webinar Registration</Link></li>
                    <li style={{textAlign: 'left'}} className="py-2"> <FontAwesomeIcon className='mx-1' icon={faUsersCog}/><Link to='/admin' className="dashboard-link">  Make an Admin </Link></li>
                    <li style={{textAlign: 'left'}} className="pt-md-3 mt-md-2 pt-sm-none mt-sm-none" id="logout"><Link to="/" className="dashboard-link"><FontAwesomeIcon className='mx-1' icon={faSignOutAlt}/>Log Out </Link></li>

                </ul>}
               
            </div>}
        </div>
    );
};

export default AdminSideBar;