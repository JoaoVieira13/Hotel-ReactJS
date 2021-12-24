import React, { useState, useEffect } from "react";
import "./CardList.scss";
import Image from "../../Assets/Images/room.jpg"
import api from "../../Services/api";
import { Link } from "react-router-dom";
import SearchBedroom from "../SearchBedroom/SearchBedroom";

function CardList() {
    const [quartos, setQuartos] = useState([]);
    const [itensPerPage, setItensPerPage] = useState(4)
    const [currentPage, setCurrentPage] = useState(0)

    const pages = Math.ceil(quartos.length / itensPerPage)
    const startIndex = currentPage * itensPerPage;
    const endIndex = startIndex + itensPerPage;
    const currentQuartos = quartos.slice(startIndex, endIndex);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        api
            .get("/quartos/add")
            .then((response) => {
                setQuartos(response.data);

                if (response === true) {
                    setLoading(false);
                }
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);

    if (loading) {
        return <div className="App">Loading...</div>;
    }

    if (!loading) {
        return (
            <>
                <div className="cardCenter">
                    <div className="centerCenter">
                        {currentQuartos.map((quarto) => {
                            let id = quarto._id;
                            return (
                                <div className="cardContainer">
                                    <img src={Image} alt="Logo" className="imgList"
                                        height={200}
                                    />
                                    <div className="cardListInfo">
                                        <div className="PelourinhoHotel">PelourinhoHotel⭐⭐⭐⭐⭐</div>
                                        <p className="bedroomName">{quarto.type} bedroom</p>
                                        <div className="bedroomNumber">
                                            <span>Capacity: {quarto.capacity}</span>
                                            <span>Bedrooms Number: {quarto.bedroomsNumber}</span>
                                            <span>Service: {quarto.service}</span>
                                        </div>
                                    </div>

                                    <div className="rightCard">
                                        <span className="priceBedroom">{quarto.valueNight} Eur</span>
                                        <div className="alignType">
                                            <span>Type: {quarto.type}</span>
                                            <span>Door Number: {quarto.number}</span>
                                        </div>
                                        <Link to={'/quartos/quarto/' + id}>
                                            <button className="offerButton">View Offer</button>
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <SearchBedroom />
                </div>
                <div className="arrayList">{Array.from(Array(pages), (quarto, index) => {
                    return <button className="element" value={index} onClick={(e) => setCurrentPage(Number(e.target.value))}>
                        {index}
                    </button>
                })}
                </div>
            </>
        );
    }
}

export default CardList;