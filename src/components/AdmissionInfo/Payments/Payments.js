import React,{useState} from 'react';
import {useForm} from 'react-hook-form'
import SideBar from '../SideBar/SideBar';



const Payments = () => {
   const { register, handleSubmit, watch, formState: { errors } } = useForm();
   const [paymentMethod, setPaymentMethod] = useState('')
   const onSubmit = (data) => {
       data.paymentMethod  = paymentMethod;
        const eventData = {
            method: data.paymentMethod,
            phone: data.phone,
            transId: data.transId,
            amount: data.amount,
            reference: data.reference
        }
        const url = `https://cryptic-stream-76661.herokuapp.com/addPayment`
        console.log('eventData')
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        alert('Payment Done Successfully!')
   }
   const handleChange = (e) => {
    setPaymentMethod(e.target.value)
   }

    return (
        <div className="row m-5">
            <div className="col-md-3 col-sm-12" >
                <SideBar />
            </div>
            <div className='offset-md-1 col-md-6 col-sm-12 px-lg-5 py-3' style={{backgroundColor:'lightgray'}}> 
            
                <form action="" onSubmit={handleSubmit(onSubmit)}  >
                <p style={{marginTop:'10px',fontWeight:'700',textAlign:'justify'}}>Send Money to 01755837019 and complete your payment by fill up this form, We will notify you within 30 minutes.</p>
                <div className="row" style={{marginTop: "20px"}}>
                    <div className="d-flex">
                        <div className="col-sm-12 col-md-12 form-group">
                            <p style={{marginBottom: "10px",textAlign:'left'}}><label for="Payment_Via" >Payment Using For...</label></p>
                            <select style={{borderRadius:'0'}}  id="inputState" className="form-control" onChange={handleChange}>
                                <option selected>Choose Your Option...</option>
                                <option value="Bkash" {...register("Bkash")}>Bkash</option>
                                <option value="Nagad" {...register("Nagad")}>Nagad</option>
                            </select>
                        </div>
                    </div>
                </div>
                <br />
                    
                    <div>
                        <input {...register("phone")} required style={{borderRadius:'0'}} type="phone" className="form-control" placeholder="Enter Your Phone Number"  /> <br />
                    </div>
                    <div>
                        <input  {...register("transId")} required style={{borderRadius:'0'}}  type="text" className="form-control" placeholder="Enter Transaction Id" /> <br />
                    </div>
                    <div>
                        <input  {...register("amount")} required style={{borderRadius:'0'}}  type="number" className="form-control" placeholder="Payment Amount" /> <br />
                    </div>
                    <div>
                        <input  type="phone"  {...register("reference")} required style={{borderRadius:'0'}}  className="form-control" placeholder="Reference " /> <br />
                    </div>
                    <div>
                        <input type="submit" className="form-control" style={{backgroundColor:'#FA9516',borderRadius:'0'}} /> 
                    </div>
                </form>
                
            </div>
        </div>
    )
}
export default Payments;