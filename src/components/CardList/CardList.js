import React, { useState, useEffect, useMemo } from "react";
import "./CardList.scss";
import api from "../../Services/api";
import { Link, useNavigate } from "react-router-dom";
import Filters from "../Filters/Filters";

function CardList() {
    const [quartos, setQuartos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const pages = Math.ceil(quartos.length / 4);

    let navigate = useNavigate();

    useEffect(() => {

        api
            .get(`/quartos/add`)
            .then((response) => {
                setQuartos(response.data);
                setLoading(false)
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, [])

    function pagination(sort) {
        api
            .get(`/quartos/add?orderBy=${sort}`)
            .then((response) => {
                setQuartos(response.data);
                setLoading(false)
                navigate(`/quartos/orderBy=${sort}`)
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }

    function pagin(page) {
        api
            .get(`/quartos/add?page=${page}`)
            .then((response) => {
                setQuartos(response.data);
                setLoading(false)
                navigate(`/quartos/page=${page}`)
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }

    function handleChangePage() {
        setPage(page + 1)
        if (page > pages) {
            setPage(pages + 1)
        }

        pagin(page)
    }

    function handleChangePagePrev() {
        setPage(page - 1)
        if (page === 1) {
            setPage(1);
        }

        pagin(page)
    }

    function updatePriceOrderAsc() {
        const sort = (`valueNight&direction=asc`)
        pagination(sort)
    }

    function updatePriceOrderDesc() {
        const sort = (`valueNight&direction=desc`)
        pagination(sort)
    }

    function updateCapacityOrderAsc() {
        const sort = (`capacity&direction=asc`)
        pagination(sort)
    }

    function updateCapacityOrderDesc() {
        const sort = (`capacity&direction=desc`)
        pagination(sort)
    }


    if (loading) {
        return <div>Loading...</div>
    }

    if (!loading) {
        return (
            <>
                <Filters updatePriceOrderAsc={() => updatePriceOrderAsc()} updatePriceOrderDesc={updatePriceOrderDesc}
                    updateCapacityOrderAsc={updateCapacityOrderAsc} updateCapacityOrderDesc={updateCapacityOrderDesc} />
                <div className="cardCenter">
                    <div className="centerCenter">
                        {quartos.map((quarto) => {
                            let id = quarto._id;
                            return (
                                <div className="cardContainer">
                                    <img src={quarto.image} alt="Logo" className="imgList"
                                        height={200}
                                    ></img>
                                    <div className="cardListInfo">
                                        <div className="PelourinhoHotel"><p>PelourinhoHotel???</p></div>
                                        <p className="bedroomName">{quarto.type} bedroom</p>
                                        <Link to={`/quarto/${id}`}>
                                            <div className="bedroomNumber">
                                                <span>Capacity: {quarto.capacity}</span>
                                                <span>Bedrooms Number: {quarto.bedroomsNumber}</span>
                                                <span>Service: {quarto.service}</span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="pricePerNight">{quarto.valueNight} Eur</div>
                                    <div className="rightCard">
                                        <span className="priceBedroom">{quarto.valueNight} Eur</span>
                                        <div className="alignType">
                                            <span>Type: {quarto.type}</span>
                                            <span>Door Number: {quarto.number}</span>
                                        </div>
                                        <Link to={`/quarto/${id}`}>
                                            <button className="offerButton">View Offer</button>
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    {/* <SearchBedroom /> */}
                </div>
                <div className="paginationButton">
                    <button className="sortPrice" onClick={() => handleChangePagePrev()}> Previous Page</button>
                    <button className="sortPrice" onClick={() => handleChangePage()}>Next Page </button>
                </div>
            </>
        );
    }
}

export default CardList;