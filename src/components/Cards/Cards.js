import React from "react";
import "./Cards.scss";
import Image from '../../Assets/Images/bedroom.jpg'

function Cards() {
    
    return(
    <div class="container">
        <p className="text">Entire Rooms of choice</p>
        <div className="card">
        <div className="pousada">
        <img src={Image} alt="Logo" className="image"
        height={272}
        />
            <div className="info">
        <p>Price: 600$</p>
        <p>Type: Single</p>
        <p>Room ID: 000</p>
                </div>
            </div>
            <p>nao aparece</p>
        </div>
    </div>
    );
  }
  
  export default Cards;