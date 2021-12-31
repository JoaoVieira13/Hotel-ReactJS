import React from 'react'
import "./DashboardBar.scss"
import { Link } from "react-router-dom"

function DashboardBar() {
    return (
        <>
            <div className='dashboardLine'>
                <p class="admTxt">PelourinhoAdministration</p>
                <div class="dropdown">
                    <button class="dropbtn">Settings</button>
                    <div class="dropdown-content">
                        <Link to="/">Back</Link>
                        <Link to="/">SignOut</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardBar;
