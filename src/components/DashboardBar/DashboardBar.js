import React, { useContext } from 'react'
import "./DashboardBar.scss"
import { Link } from "react-router-dom"

function DashboardBar() {

    return (
        <>
            <div className='dashboardLine'>
                <p class="admTxt">PelourinhoAdministration</p>
                <div className='responsiveBar'>
                    <Link to="/dashboard/users/page=1"><p className='txtbar'>Users</p></Link>
                    <Link to="/dashboard/Bedrooms/page=1"><p className='txtbar'>Bedrooms</p></Link>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">Settings</button>
                    <div class="dropdown-content">
                        <Link to="/">Back</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardBar;
