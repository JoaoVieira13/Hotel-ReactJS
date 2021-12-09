import React from "react";
import "./FindRooms.scss"
import FeatherIcon from 'feather-icons-react';

function FindRooms() {
    
    return(
        <div className="centrar">
            <div className="box">
                <div className="item1">
                <div className="icon"><FeatherIcon icon="map-pin" size="24"/></div>
            <div className="location">Location <span>Porto</span></div>
                </div>
                <div className="item1">
            <div className="icon"><FeatherIcon icon="calendar" size="24"/></div>
            <div className="location">Check in <span>13 Jun 2021</span></div>
                </div>
                <div className="item1">
            <div className="icon"><FeatherIcon icon="calendar" size="24"/></div>
            <div className="location">Check out <span>14 Jun 2021</span></div>
                </div>
                <div className="button">
                    <button>Search</button>
                </div>
            </div> 
        </div>
    );
  }
  
  export default FindRooms;