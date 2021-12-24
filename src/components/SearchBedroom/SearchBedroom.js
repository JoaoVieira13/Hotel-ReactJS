import React from "react";
import "./SearchBedroom.scss";

function SearchBedroom() {
    return (
        <div className="searchBedroom">
            <div className="searchBed">Search Bedroom</div>
            <div className="searchInputs">
                <input className="inputsSearch" placeholder="Capacity" />
                <input className="inputsSearch" placeholder="Bedrooms Number" />
                <input className="inputsSearch" placeholder="Check-in Date" />
                <button className="searchBut">Search</button>
            </div>
        </div>
    )
}

export default SearchBedroom;