import React,{useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Data from "./Data.json"
const Program = () => {
    const {dept} = useParams()
    const [department, setDepartments] = useState({})
    useEffect(() => {
        setDepartments(Data.find(dt => dt.dept === dept))
    },[])
    const {title, body,img} = department;
    return (
        <div className="container-fluid p-5">
           <div className="row">
               <div className="col-md-6">
                    <img src={img} alt="" className="img-fluid "  />
               </div>
               <div className="col-md-6" style={{textAlign:'justify'}}>
                    <h1 className="my-3">{title}</h1>
                    <h4>{body}</h4>
               </div>
               
           </div>
         </div>   
    )
}
export default Program;