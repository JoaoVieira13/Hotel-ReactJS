import React, { useState, useEffect } from 'react';
import "./usersDashboard.scss";
import DashboardSelector from "../../components/DashboardSelector/DashboardSelector"
import api from "../../Services/api";
import DeleteChangeUsers from '../DeleteChangeUsers/DeleteChangeUsers';
import CreateUser from '../CreateUser/CreateUser';
import Cookies from 'universal-cookie';
import ErroPermissions from '../ErroPermissions/ErroPermissions';
import { useNavigate } from 'react-router-dom';

function UsersDashboard() {

    const [users, setUsers] = useState([])
    const [userType, setUserType] = useState("");
    const [page, setPage] = useState(1);
    const pages = Math.ceil(users.length / 4);
    const cookies = new Cookies();
    let Navigate = useNavigate();

    useEffect(() => {
        api
            .get(`/auth/users`)
            .then(function (response) {
                setUsers(response.data)
            })
            .catch(function (err) {
                console.log(err)
            })


        api
            .get('/auth/me', {
                headers: {
                    'x-access-token': cookies.get("hotel")
                }
            })
            .then(response => {
                setUserType(response.data.decoded.userType[0])
            })
            .catch((err) => console.log(err))
    }, []);

    function pagination(page) {
        api
            .get(`/auth/users?page=${page}`)
            .then(function (response) {
                setUsers(response.data)
                Navigate(`/dashboard/users/page=${page}`)

            })
            .catch(function (err) {
                console.log(err)
            })
    }


    if (userType !== "ADMIN") {
        return (
            < ErroPermissions />
        )
    }

    function handleChangePage() {
        setPage(page + 1)
        if (page > pages) {
            setPage(pages + 1)
        }
        // console.log(page, pages)
        pagination(page)
    }

    function handleChangePagePrev() {
        setPage(page - 1)
        if (page === 1) {
            setPage(1);
        }
        // console.log(page, pages)
        pagination(page)
    }

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
                        <div className="paginationBut">
                            <button className="sortPrice" onClick={() => handleChangePagePrev()}> Previous Page</button>
                            <button className="sortPrice" onClick={() => handleChangePage()}>Next Page </button>
                        </div>
                    </div>
                    <CreateUser />
                </div>
            </div>
        </>
    )
}

export default UsersDashboard
