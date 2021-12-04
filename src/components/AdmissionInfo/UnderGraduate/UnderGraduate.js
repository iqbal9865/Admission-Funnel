import React,{useState} from 'react';
import SideBar from '../SideBar/SideBar';
import Programs from './Programs';
import Data from './Data.json'
const UnderGraduate = () => {
    const [dept, setDept] = useState(Data)
    return (
        <div className="row m-5">
            
            <div className="col-md-3 col-sm-12">
                <SideBar />
            </div>
            <div className='col-md-9 col-sm-12 px-lg-5 py-3' style={{textAlign:'justify', fontWeight:'700'}}> 
               <div className='row'>
                    {
                        Data.map(dept => <Programs dept={dept} />)
                    }
               </div>
            </div>
        </div>
    );
};

export default UnderGraduate;