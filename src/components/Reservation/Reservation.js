import React, { useEffect, useState } from "react";
import './Reservation.scss'
import Image from '../../Assets/Images/bedroom.jpg'
import Calendar from "../Calendar/Calendar";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import api from '../../Services/api';
import HotelTerms from "../HotelTerms/HotelTerms";

function Reservation() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [quarto, setQuartos] = useState([]);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        api
            .get('/quartos/quarto/61bbcdde1d5f4e4d8b24dcc2')
            .then(function (response) {
                setQuartos(response.data);

                if (response === true) {
                    setLoading(true);
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '70%',
        transform: 'translate(-50%, -50%)',
        width: 100,
    };

    if (loading) {
        return <div className="App">Loading...</div>;
    }

    return (
        <>
            <div className="teste">
                <p className="title2">Grande Real Pelourinho Hotel & Spa</p>
                <div className="reservation">
                    <img src={Image} alt="Logo" className="bedroom"
                        height={500}
                    />
                    <div className="reserve">
                        <button className="button">Make a Reservation</button>
                        <div className="line">
                            <p className="price"> {quarto.valueNight} EUR</p>
                            <p className="avg">avg/night</p>
                        </div>
                        <hr />
                        <div class="inf">
                            <p>Capacity: {quarto.capacity}</p>
                            <p>Bedrooms Number: {quarto.bedroomsNumber}</p>
                        </div>
                        <hr />
                        <p className="covid">Throughout the mainland national territory,
                            access to tourist establishments or local accommodation establishments depends
                            on the presentation by customers,
                            at check-in, of a COVID Digital Certificate from the European Union or a negative
                            test.</p>
                        <div className="selectDate">
                            <button onClick={handleOpen} className="date">Select Date</button>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-describedby="modal-modal-description"
                            >
                                <Box style={style}>
                                    <Typography id="modal-modal-description">
                                        <Calendar />
                                    </Typography>
                                </Box>
                            </Modal>
                        </div>
                    </div>
                </div>
                <p className="overview">Bedroom Overview</p>
                <div className="apiInfo">
                    <p>{quarto.information}</p>
                </div>
                <HotelTerms />
            </div>
        </>
    );
}

export default Reservation;