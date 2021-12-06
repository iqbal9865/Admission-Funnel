import React from 'react';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
const btnStyle = {
    backgroundColor:'#23303F',
    color:'white',
    margin:'5px'
}
const Subscribers = () => {
    return (
        <div className="row">
            <div className="col-md-3">
                <AdminSideBar />
            </div>
            <div className="col-md-8 p-5">
            <h2 style={{textAlign:'left'}}>Our Subscribers</h2>
            <table class="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Manage</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Nahid Hasan</td>
                    <td>nahidhasanweb777@gmail.com</td>
                    <button className="btn" style={btnStyle}>Delete</button>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Tanzila Hasan</td>
                    <td>contact.me.onu@gmail.com</td>
                    <button className="btn" style={btnStyle}>Delete</button>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Raj Dihan</td>
                    <td>contact.me.nahid@gmail.com</td>
                    <button className="btn" style={btnStyle}>Delete</button>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    );
};

export default Subscribers;