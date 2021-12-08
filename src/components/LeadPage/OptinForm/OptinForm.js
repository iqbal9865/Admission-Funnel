import React from 'react';
import { useForm } from "react-hook-form";
import {Link} from "react-router-dom";
import "./OptinForm.css"
import { useHistory } from "react-router-dom";
// import { UserContext } from '../../../App';
const OptinForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    let history = useHistory();
    // const [email, setEmail] = useContext(UserContext);
    const onSubmit = data => {
        
        
        // const url = `http://localhost:5000/addSubscribers`
        // fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })
        // .then(res => console.log('server side response: ',res))
        //     console.log("email:",data.email)
        fetch('http://localhost:5000/addSubscribers', {
            method: 'POST',
            headers : {'content-type': 'application/json'},
            body : JSON.stringify(data)
        })

        .then(res => res.json())
        .then(success => {
            if(success){
                
            }
        })  
        
        history.push('/admissionOffer')   
    }
    

    return (
        <div>
            
            <form className=" mx-lg-5 px-lg-5" onSubmit={handleSubmit(onSubmit)}> 
           
             <div class="input-group ">
                <input style={{borderRadius:'0'}} type="email" required class="form-control" placeholder="Enter Your Email" aria-label="Enter Your Email" aria-describedby="basic-addon2" {...register("email", { required: true })}  />
                <div class="input-group-append" >
                    <button type="submit"  className=" input-group-text " id="email-submit-btn">
                        {/* <Link to="" id='email-submit-btn-link'>SUBMIT</Link> */}
                        SUBMIT
                    </button>
                </div>
                </div>
             
            
            </form>
        </div>
    );
};

export default OptinForm;