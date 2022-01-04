import React, { useState } from 'react';
import "./DashboardSelector.scss";
import { Link } from "react-router-dom";
import Admin from "../../Assets/Images/admin.png";

function DashboardSelector() {

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    const time = `${current.getHours()}:${current.getMinutes()}h`

    return (
        <div className='dashboardBar'>
            <img className='adminImg' src={Admin} />
            <div className='welcome'>
                Hey Admin <br />Welcome
            </div>
            <div className='getTime'>
                <span>{date}</span>
                <span>{time}</span>
            </div>
            <div className='ul'>
                <hr />
                <Link to="/dashboard/users"><div className='li'>Users</div></Link>
                <hr />
                <Link to="/dashboard/bedrooms"><div className='li'>Bedrooms</div></Link>
                <hr />
            </div>
        </div >
    )
}

export default DashboardSelector;
