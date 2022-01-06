import React from 'react';
import "./FavoriteBedroom.scss";
import Image from "../../Assets/Images/hotel.jpg"

function FavoriteBedroom() {
    return (
        <div className='favCenter'>
            <p className='favText'>My Favorite Bedrooms:</p>
            <div className='favCard'>
                <div className='favInfoFlex'>
                    <img className='favImg' src={Image} />
                    <div className='flexTxt'>
                        <p className='favTitle'>Familiar bedroom</p>
                        <div className='favNumber'>
                            <span>Capacity: 24</span>
                            <span>Bedrooms Number: 1</span>
                            <span>Service: None</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FavoriteBedroom
