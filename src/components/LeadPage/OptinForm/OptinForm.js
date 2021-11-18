import React from 'react';
import { useForm } from "react-hook-form";
import {Link} from "react-router-dom";
const OptinForm = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    

    return (
        <div>
            
            <form className=" mx-lg-5 px-lg-5" onSubmit={handleSubmit(onSubmit)}> 
           
             <div class="input-group mt-4">
                <input style={{borderRadius:'0'}} type="email" class="form-control" placeholder="Enter Your Email" aria-label="Enter Your Email" aria-describedby="basic-addon2" {...register("email", { required: true })}  />
                <div class="input-group-append">
                    <button type="submit" style={{backgroundColor:"#E55259",border:"none",padding:"08px", borderRadius:'0',fontWeight:'500'}} class="input-group-text" id="basic-addon2"><Link to="/admissionOffer" style={{color:'white',textDecoration:'none'}}>SUBMIT</Link></button>
                </div>
                </div>
             
            
            </form>
        </div>
    );
};
// div{
//     h3{

//     }
//     form{
//         input{

//         }
//     }
// }
export default OptinForm;