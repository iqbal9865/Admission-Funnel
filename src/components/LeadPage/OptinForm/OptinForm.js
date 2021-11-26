import React from 'react';
import { useForm } from "react-hook-form";
import {Link} from "react-router-dom";
import "./OptinForm.css"
import { useHistory } from "react-router-dom";

const OptinForm = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    let history = useHistory();

    const onSubmit = data => {
            console.log('show output from optin')
             console.log(data);
             history.push('/admissionOffer')
        }
    

    return (
        <div>
            
            <form className=" mx-lg-5 px-lg-5" onSubmit={handleSubmit(onSubmit)}> 
           
             <div class="input-group ">
                <input style={{borderRadius:'0'}} type="email" required class="form-control" placeholder="Enter Your Email" aria-label="Enter Your Email" aria-describedby="basic-addon2" {...register("email", { required: true })}  />
                <div class="input-group-append" >
                    <button type="submit"  className=" input-group-text" id="email-submit-btn">
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