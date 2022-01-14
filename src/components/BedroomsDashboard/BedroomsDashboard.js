import React, { useState, useEffect } from 'react';
import DashboardSelector from '../DashboardSelector/DashboardSelector';
import "./BedroomsDashboard.scss";
import api from "../../Services/api";
import DeleteChangeBedrooms from '../DeleteChangeBedrooms/DeleteChangeBedrooms';
import CreateBedrooms from '../CreateBedrooms/CreateBedrooms';
import Cookies from 'universal-cookie';
import ErroPermissions from '../ErroPermissions/ErroPermissions';

function BedroomsDashboard() {

    const [quartos, setQuartos] = useState([])
    const cookies = new Cookies();
    const [userType, setUserType] = useState("");

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

    if (userType !== "ADMIN") {
        return (
            < ErroPermissions />
        )
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
            </div>
            <CreateBedrooms />
        </div>
    )
}

export default BedroomsDashboard
