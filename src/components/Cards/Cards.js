import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Cards.scss";
import Image from '../../Assets/Images/bedroom.jpg';
import api from "../../Services/api";

function Cards() {

    const [quartos, setQuartos] = useState([]);

    useEffect(() => {

        api
            .get("/quartos/add")
            .then((response) => setQuartos(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);

    return (
        <>
            <div className="alinhar">
                {quartos.slice(0, 4).map((quarto) => {
                    let id = quarto._id;
                    return (
                        <Link to={'/quarto/' + id}> <div className="card">
                            <div className="pousada">
                                <img src={quarto.image} alt="Logo" className="image"
                                    height={272}
                                />
                                <div className="info">
                                    <p>Price: {quarto.valueNight}</p>
                                    <p>Type: {quarto.type}</p>
                                    <p>Beds Number: {quarto.bedroomsNumber}</p>
                                </div>
                            </div>
                        </div>
                        </Link>
                    );
                })}
            </div>
        </>
    );
}

export default Cards;