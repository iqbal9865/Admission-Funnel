import React from 'react';
import { useForm } from "react-hook-form";
const OptinForm = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    

    return (
        <div className="m-5">
            <h3 style={{"textAlign": "left", "margin": "15px 0px", "fontWeight":"700"}}>GET IN TOUCH</h3>
            
            <form onSubmit={handleSubmit(onSubmit)}> 
            <div className="form-group">
                
                <input style={{"borderRadius": '0'}} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your email" {...register("email", { required: true })} />
                
             </div>
            <br />
            <div className="form-group">
                <button style={{"borderRadius": '0', "backgroundColor":"#003366", "color":"white", "fontWeight":"700"}} type="submit" className="form-control btn">SUBMIT</button>
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