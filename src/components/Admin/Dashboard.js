import React from 'react';
import AdminSideBar from './AdminSideBar/AdminSideBar'
const Dashboard = () => {
    return (
        <div className="row ">

            <div className="col-md-3 col-sm-12">
                <AdminSideBar />
            </div>
        </div>
    );
};

export default Dashboard;