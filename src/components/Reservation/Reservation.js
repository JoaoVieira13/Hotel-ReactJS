import React, { useEffect, useState, useContext } from "react";
import './Reservation.scss'
import Calendar from "../Calendar/Calendar";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import api from '../../Services/api';
import HotelTerms from "../HotelTerms/HotelTerms";
import { useParams, Link } from "react-router-dom"
import { Context } from "../../Context/AuthContext";

function Reservation() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [quarto, setQuartos] = useState([]);
    const { quartoId } = useParams()

    const [loading, setLoading] = useState(true);
    const { isAuthenticated } = useContext(Context)

    useEffect(() => {
        // TEM QUE SER O QUE TÁ NA ROTA 
        api
            .get(`/quartos/quarto/${quartoId}`)
            .then(function (response) {
                setQuartos(response.data);
                setLoading(false)
            })
            .catch(function (error) {
                console.log(error);
                setLoading(false)
            })
    }, []);

    api
        .post(`/auth/favorites`)
        .then(function (response) {

        })

    const style = {
        position: 'absolute',
        top: '40%',
        left: '32%',
        width: 300,
        height: 270,
        backgroundColor: "white",
        borderRadius: 10,
    };

    if (loading) {
        return <div className="App">Loading...</div>;
    }

    return (
        <>
            <div className="teste">
                <p className="title2">Grande Real Pelourinho Hotel & Spa</p>
                <div className="reservation">
                    <img src={quarto.image} alt="Logo" className="bedroom"
                        height={500}
                    />
                    <div className="reserve">
                        {isAuthenticated ? (
                            <Link to="/favorites"><button className="button">Add to Favorites</button></Link>
                        ) : (
                            <Link to="/login"><button className="button">Add to Favorites</button></Link>
                        )
                        }
                        <div className="line">
                            <p className="price"> {quarto.valueNight} EUR</p>
                            <p className="avg">price/night</p>
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
                            {isAuthenticated && (
                                <button onClick={handleOpen} className="date">Select Date</button>
                            )
                            }
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
                    <p className="quartoInfoTxt">{quarto.information}</p>
                </div>
                <HotelTerms />
            </div>
        </>
    );
}

export default Reservation;