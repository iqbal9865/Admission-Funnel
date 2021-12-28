import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";



const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      padding               : '60px'
    }
};

Modal.setAppElement('#root')

const Registration = ({modalIsOpen,closeModal}) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        const eventData = {
          name: data.name,
          phone: data.phone,
          study: data.study
      
      };
      const url = `https://cryptic-stream-76661.herokuapp.com/addWebReg`
      console.log('eventData')
      fetch(url, {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(eventData)
      })
      .then(res => res.json())
      closeModal()
    }
    return (
        <div>
             
             <Modal 
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

        <h3 style={{fontWeight:'700',color:'#23303F'}}>REGISTRATION FOR LIVE WEBINAR</h3>
        <p style={{textAlign:'center', fontWeight:'700'}}>10 FEB 2022, 8:30 PM </p>
        <p style={{textAlign: 'center',fontWeight:'700'}}>We will sent webinar link to your email</p>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form-group my-3'>
            <input className='form-control' placeholder='Enter Your Name' {...register("name", { required: true })} /> 
            {errors.name && <span className="text-danger">This field is required</span>}
          </div>
          <div className='form-group my-3'>
            <input className='form-control' placeholder='Enter Your Phone' type='number' {...register("phone" )} /> 
            {errors.phone && <span className="text-danger">This field is required</span>}
          </div>
          
          
          <div className='form-group row my-3'>
            <div className='col-6'>
            <select name="study" id="" className='form-control'  {...register("study", { required: true })}>
                <option value="Not set"> Select Current Study </option>
                <option value="HSC">HSC</option>
                <option value="Admission">Admission</option>
                <option value="Undergraduate">Undergraduate</option>
            </select>
            {errors.study && <span className="text-danger">This field is required</span>}

            </div>
            <div className="col-6">
            <input className='form-control' style={{backgroundColor:'#FA9516', fontSize:'17px', fontWeight:'700',color:'black',border:'none'}} type="submit" />
            </div>
            
          </div>
       
        </form>
        </Modal>
        </div>
    )
}
export default Registration;