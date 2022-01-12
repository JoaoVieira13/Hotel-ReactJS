import React, { useState, useEffect } from 'react';
import "./usersDashboard.scss";
import DashboardSelector from "../../components/DashboardSelector/DashboardSelector"
import api from "../../Services/api";
import DeleteChangeUsers from '../DeleteChangeUsers/DeleteChangeUsers';
import CreateUser from '../CreateUser/CreateUser';

function UsersDashboard() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        api
            .get(`/auth/users`)
            .then(function (response) {
                setUsers(response.data)
            })
            .catch(function (err) {
                console.log(err)
            })
    }, []);


    return (
        <>
            <div className='flexMap'>
                <DashboardSelector />
                <div className='testa-me'>
                    <div className='usersContainer'>
                        <p className='userstext'>Users List:</p>
                        {users.map((user) => {
                            return (
                                <div className='alignUserCards'>
                                    <div className='usersCard'>
                                        <img className='userImg' src={user.image} />
                                        <div className='usersCol'>
                                            <span>UserID: {user._id}</span>
                                            <span>UserEmail: {user.email}</span>
                                            <span>UserType: {user.userType}</span>
                                            <DeleteChangeUsers userId={user._id} />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <CreateUser />
                </div>
            </div>
        </>
    )
}

export default UsersDashboard
