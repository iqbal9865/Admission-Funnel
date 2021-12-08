import React,{useState} from 'react';
import { useForm } from 'react-hook-form'
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import axios from 'axios';
const btnColor = {
    backgroundColor:'#23303F',
    color:'white'
}
const ManageEvents = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null)
    const onSubmit = data => {
        // console.log(data)
        const eventData = {
            name: data.name,
            price: data.price,
            weight: data.weight,
            imageURL: imageURL
        };
        const url = `http://localhost:5000/addEvents`
        console.log('eventData')
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => console.log('server side response: ',res))
    };
    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'd2847ca22b20bc82ca92f90a0f0fd02d')
        imageData.append('image',event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url)
          })
          .catch(function (error) {
            console.log(error);
          });

    }
    return (
        <div className="row">
            <div className="col-md-3">
                <AdminSideBar />
            </div>
            <div className="col-md-8 p-5">
                <h2 style={{textAlign:'left'}}>Add Event</h2>

                <form  className="my-4" onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("name", { required: true })} className="form-control" placeholder="Events Name"/> <br />

                    <input className="form-control" placeholder=""type="file" {...register("imageURL", { required: true })} onChange={handleImageUpload} /><br />

                    <input type="submit" value="SUBMIT" className="form-control " style={{backgroundColor:'#23303F', color:'white'}} />

                </form>

                <h2 style={{textAlign:'left'}}>Manage Events</h2>
                <div style={{textAlign:'left'}}>
                    <div className="d-flex my-4">
                        <h5>Programming Contest</h5>
                        <button className="btn btn-primary mx-2"  style={btnColor}>Edit</button>
                        <button className=" btn btn-primary mx-2"  style={btnColor}>Delete</button>
                    </div>
                    <div className="d-flex my-4">
                        <h5>Bussiness Compitions</h5>
                        <button className="btn btn-primary mx-2"  style={btnColor}>Edit</button>
                        <button className="btn btn-primary mx-2"  style={btnColor}>Delete</button>
                    </div>
                    <div className="mx-2 d-flex my-4">
                        <h5>Mathematic Olympiad</h5>
                        <button className="btn btn btn-primary mx-2"  style={btnColor}>Edit</button>
                        <button className="btn btn-primary mx-2"  style={btnColor}>Delete</button>
                    </div>
                    
                   
                </div>
            </div>
        </div>
    );
};

export default ManageEvents;