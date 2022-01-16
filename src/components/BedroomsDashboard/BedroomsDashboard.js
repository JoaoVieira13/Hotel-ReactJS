import React, { useState, useEffect } from 'react';
import DashboardSelector from '../DashboardSelector/DashboardSelector';
import "./BedroomsDashboard.scss";
import api from "../../Services/api";
import DeleteChangeBedrooms from '../DeleteChangeBedrooms/DeleteChangeBedrooms';
import CreateBedrooms from '../CreateBedrooms/CreateBedrooms';
import Cookies from 'universal-cookie';
import ErroPermissions from '../ErroPermissions/ErroPermissions';
import { useNavigate } from 'react-router-dom';

function BedroomsDashboard() {

    const [quartos, setQuartos] = useState([])
    const cookies = new Cookies();
    const [userType, setUserType] = useState("");
    let Navigate = useNavigate();
    const [page, setPage] = useState(1);
    const pages = Math.ceil(quartos.length / 4);

    useEffect(() => {
        api
            .get(`/quartos/add`)
            .then(function (response) {
                setQuartos(response.data)
            })
            .catch(function (err) {
                console.log(err)
            })

        api
            .get('/auth/me', {
                headers: {
                    'x-access-token': cookies.get("hotel")
                }
            }).then(response => {
                setUserType(response.data.decoded.userType[0])
            }).catch((err) => console.log(err))
    }, []);

    function pagination(page) {
        api
            .get(`/quartos/add?page=${page}`)
            .then(function (response) {
                setQuartos(response.data)
                Navigate(`/dashboard/bedrooms/page=${page}`)
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
        <div className='BedroomsDashboard'>
            <DashboardSelector />
            <div className='bedroomsContainer'>
                <p className='bedroomstext'>Bedrooms List:</p>
                {quartos.map((quarto) => {
                    return (
                        <div className='bedroomssCard'>
                            <img className='bedroomssImg' src={quarto.image} />
                            <div className='bedroomssCol'>
                                <span>BedroomID: {quarto._id}</span>
                                <span>BedroomNumber: {quarto.number}</span>
                                <span>BedroomType: {quarto.type}</span>
                                <span>BedroomCapacity: {quarto.capacity}</span>
                                <DeleteChangeBedrooms bedroomId={quarto._id} />
                            </div>
                        </div>
                    );
                })}
                <div className="paginationButt">
                    <button className="sortPrice" onClick={() => handleChangePagePrev()}> Previous Page</button>
                    <button className="sortPrice" onClick={() => handleChangePage()}>Next Page </button>
                </div>
            </div>
            <CreateBedrooms />
        </div>
    )
}

export default BedroomsDashboard
