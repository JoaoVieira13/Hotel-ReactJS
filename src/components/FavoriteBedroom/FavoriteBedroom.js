import React, { useEffect, useState } from 'react';
import "./FavoriteBedroom.scss";
import api from '../../Services/api';
import Cookies from 'universal-cookie';

function FavoriteBedroom() {

    const cookies = new Cookies();
    const [saveFavorite, setSaveFavorite] = useState([]);
    const [userId, setUserId] = useState("");

    useEffect(() => {
        api
            .get("/auth/favorites", {
                headers: {
                    'x-access-token': cookies.get("hotel")
                }
            })
            .then(function (response) {
                setSaveFavorite(response.data.favorites)
            })

        api
            .get('/auth/me', {
                headers: {
                    'x-access-token': cookies.get("hotel")
                }
            }).then(response => {
                setUserId(response.data.decoded.id)
            }).catch((err) => console.log(err))
    }, [])

    return (
        <div className='favCenter'>
            <p className='favText'>My Favorite Bedrooms:</p>
            {saveFavorite.map((favorite) => {
                return (
                    <div className='favCard'>
                        <div className='favInfoFlex'>
                            <img className='favImg' src={favorite.image} />
                            <div className='flexTxt'>
                                <p className='favTitle'>{favorite.type}</p>
                                <div className='favNumber'>
                                    <button onClick={(() => api.delete(`/auth/favorites`, {
                                        headers: {
                                            "quartoId": favorite._id,
                                            "userId": userId,
                                        }
                                    }))}>X</button>
                                    <span>Capacity: {favorite.capacity}</span>
                                    <span>Bedrooms Number: {favorite.bedroomsNumber}</span>
                                    <span>Service: {favorite.service}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default FavoriteBedroom
