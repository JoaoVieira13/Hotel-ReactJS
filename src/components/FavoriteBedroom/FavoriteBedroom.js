import React, { useEffect, useState } from 'react';
import "./FavoriteBedroom.scss";
import api from '../../Services/api';
import Cookies from 'universal-cookie';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { MdDeleteOutline } from 'react-icons/md';

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
        <>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className='favCenter'>
                <p className='favText'>My Favorite Bedrooms:</p>
                {saveFavorite.map((favorite) => {
                    return (
                        <div className='favCard'>
                            <div className='favInfoFlex'>
                                <img className='favImg' src={favorite.image} />
                                <div className='flexTxt'>
                                    <div className='flexTiteButton'>
                                        <p className='favTitle'>{favorite.type}</p>
                                        <button className='deletedFavorites' onClick={(() => api.delete(`/auth/favorites`, {
                                            headers: {
                                                "quartoId": favorite._id,
                                                "userId": userId,
                                            }
                                        })
                                            .then(function () {
                                                toast.success("Favorite Deleted!")
                                                setTimeout(() => window.location.reload(), 3000)
                                            })
                                            .catch(function () {
                                                toast.error("Error Removing Favorite!")
                                            })
                                        )}><MdDeleteOutline className='mdIcon' /></button>
                                    </div>
                                    <div className='favNumber'>
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
        </>
    )
}

export default FavoriteBedroom
