import React,{useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Data from "./Data.json"
const Program = () => {
    const {dept} = useParams()
    const [department, setDepartments] = useState({})
    useEffect(() => {
        setDepartments(Data.find(dt => dt.dept === dept))
    },[])
    const {title, body} = department;
    return (
        <div>
            <h1>Program {dept}</h1>
            <h3>{title}</h3>
            <h3>{body}</h3>
         </div>   
    )
}
export default Program;