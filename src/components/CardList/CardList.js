import React, { useState, useEffect } from "react";
import "./CardList.scss";
import Image from "../../Assets/Images/room.jpg"
import api from "../../Services/api";
import { Link, useNavigate } from "react-router-dom";
import SearchBedroom from "../SearchBedroom/SearchBedroom";
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

    function pagination(page, sort) {
        api
            .get(`/quartos/add?page=${page}&orderBy=${sort}`)
            .then((response) => {
                setQuartos(response.data);
                setLoading(false)
                navigate(`/quartos/page=${page}`)
                navigate(sort)
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }

    function handleChangePage() {
        setPage(page + 1)
        if (page > pages) {
            setPage(3)
        }

        pagination(page)
    }

    function handleChangePagePrev() {
        setPage(page - 1)
        if (page === 1) {
            setPage(1);
        }

        pagination(page)
    }

    function updatePriceOrderAsc() {
        const sort = (`${page}&orderBy=valueNight&direction=asc`)
        pagination(sort)
    }

    function updatePriceOrderDesc() {

        const sort = (`${page}&orderBy=valueNight&direction=desc`)
        pagination(sort)
    }

    function updateCapacityOrderAsc() {

        const sort = (`${page}&orderBy=capacity&direction=asc`)
        pagination(sort)
    }

    function updateCapacityOrderDesc() {
        const sort = (`${page}&orderBy=capacity&direction=desc`)
        pagination(sort)
    }


    if (loading) {
        return <div>Loading...</div>
    }

    if (!loading) {
        return (
            <>
                <Filters updatePriceOrderAsc={updatePriceOrderAsc} updatePriceOrderDesc={updatePriceOrderDesc}
                    updateCapacityOrderAsc={updateCapacityOrderAsc} updateCapacityOrderDesc={updateCapacityOrderDesc} />
                <div className="cardCenter">
                    <div className="centerCenter">
                        {quartos.map((quarto) => {
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
                    <button className="sortPrice" onClick={handleChangePagePrev}> Previous Page</button>
                    <button className="sortPrice" onClick={handleChangePage}>Next Page </button>
                </div>
            </>
        );
    }
}

export default CardList;