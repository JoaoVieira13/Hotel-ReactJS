import React, { useEffect, useState } from "react";
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
                {quartos.map((quarto) => {
                    return (
                        <a href="/bedroom"><div className="card">
                            <div className="pousada">
                                <img src={Image} alt="Logo" className="image"
                                    height={272}
                                />
                                <div className="info">
                                    <p>Price: {quarto.valueNight}</p>
                                    <p>Type: {quarto.type}</p>
                                    <p>Number: {quarto.number}</p>
                                </div>
                            </div>
                        </div>
                        </a>
                    );
                })}
            </div>
        </>
    );
}

export default Cards;