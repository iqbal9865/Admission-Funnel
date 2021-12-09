import React from 'react';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import {useForm} from 'react-hook-form'
const AddCampaign = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        const eventData = {

            campaignName: data.campaignName,
            date: data.date,
            time: data.time
            
        };
        const url = `http://localhost:5000/addCampaigns`
        console.log('eventData')
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => console.log('server side response: ',res))
        .then(data => console.log(data))
        alert('Set Campaign Successfully!')
    };
    
    return (
        <div className="row ">
            <div className="col-md-3">
                <AdminSideBar />
            </div>
            <div className="p-5 col-md-8">
                <h2 style={{textAlign: 'left', color:'#23303F'}} className='my-2'>Add Campaign</h2>

            <form action="" onSubmit={handleSubmit(onSubmit)} >
                <div className="form-group">
                    <input type="text" {...register("campaignName", { required: true })} className="form-control" placeholder="Enter Campaign Name" /> <br />
                    <input {...register("date", { required: true })} type="date" name="date" id="" className="form-control" /> <br />
                    <input {...register("time", { required: true })} type="time" name="time" id="" className="form-control" /> <br />
                    <input type="submit" className='btn btn-primary form-control' value="ADD Campaign" style={{backgroundColor:'#23303F'}} />
                </div>
            </form>
            </div>
        </div>
    )
}
export default AddCampaign