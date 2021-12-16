import React from "react";
import './Reservation.scss'
import Image from '../../Assets/Images/bedroom.jpg'

function Reservation() {
    return (
        <div>
            <p className="title">Grande Real Pelourinho Hotel & Spa</p>
            <div className="reservation">
                <img src={Image} alt="Logo" className="bedroom"
                    height={500}
                />
                <div className="reserve">
                    <button className="button">Make a Reservation</button>
                    <div className="line">
                        <p className="price">139 EUR</p>
                        <p className="avg">avg/night</p>
                    </div>
                    <hr />
                    <div class="inf">
                        <p>Capacity: 2</p>
                        <p>Bedrooms Number: 1</p>
                    </div>
                    <hr />
                    <div className="cert">
                        <p className="covid">Throughout the mainland national territory,
                            access to tourist establishments or local accommodation establishments depends
                            on the presentation by customers,
                            at check-in, of a COVID Digital Certificate from the European Union or a negative
                            test.</p>
                    </div>
                    <div className="selectDate">
                        <button className="date">Select Date</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Reservation;