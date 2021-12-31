import React from 'react'
import DashboardBar from '../../components/DashboardBar/DashboardBar'
import UsersDashboard from '../../components/UsersDashboard/usersDashboard';

function Dashboard() {
    return (
        <>
            <DashboardBar />
            <UsersDashboard />
        </>
    )
}

export default Dashboard;
